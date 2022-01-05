import { prisma } from "./prisma"
import { generator } from "./generator"

const createUser = ({ email, name, role, state }) => {
    if (!name || name.length < 6 || name.includes('  ')) throw new Error('name is required')
    if (!email || !email.includes('@') || email.length < 6) throw new Error('email is required')

    return {
        email: email,
        name: name,
        role: role ? role : 'USER',
        state: state ? state : 'UNVERIFIED'
    }
}

const get = async (id) => {
    if (!id) return await prisma.user.findMany({
        where: {
            state: 'VERIFIED'
        },
        select: {
            email: true,
            name: true,
            role: true,
            state: true
        }
    })

    if (id.includes('@')) return await prisma.user.findUnique({
        where: {
            email: id
        },
        select: {
            email: true,
            name: true,
            role: true,
            state: true
        }
    })

    return await prisma.user.findUnique({
        where: {
            id: (await prisma.token.findUnique({
                where: {
                    value: id
                },
                select: {
                    userId: true
                }
            }))?.userId | 0
        },
        select: {
            email: true,
            name: true,
            role: true,
            state: true
        }
    })

}


const save = async ({ name, email }) => {
    const user = createUser({ name, email })

    return (await prisma.token.create({
        data: {
            value: generator.generate(),
            user: {
                create: {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    state: user.state,
                }
            }
        }
    })).value
}

const erase = async ({ email }) => {
    await prisma.user.delete({
        where: {
            email: email
        }
    })
}

const update = async (params) => {
    const user = await get(params.token)

    if (!user) return user

    for (const key in params) user[key] = params[key]

    return await prisma.user.update({
        data: {
            name: user.name,
            email: user.email,
            role: user.role,
            state: user.state
        },
        where: {
            id: (await prisma.token.findUnique({
                where: {
                    value: user.token
                },
                select: {
                    userId: true
                }
            }))?.userId | 0
        },
        select: {
            email: true,
            name: true,
            role: true,
            state: true
        }
    })
}

export {
    get,
    save,
    erase,
    update,
}