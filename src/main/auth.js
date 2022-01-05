import { prisma } from "./prisma"
import { generator } from "./generator"
import { emails, send } from "../service/email"

const signin = async (user) => {
    if (user?.state != 'VERIFIED') return null

    const token = (await prisma.token.create({
        data: {
            value: generator.generate(),
            user: {
                connect: {
                    email: user.email
                }
            }
        }
    })).value

    const code = generator.generate().substring(0, 4)

    send(emails.signin({
        token: token,
        code: code,
        name: user.name,
        email: user.email,
    }))

    return {
        code: code
    }
}

const signout = async (user) => {

    if (user?.state != 'VERIFIED') return null

    return {
        success: (await prisma.token.deleteMany({
            where: {
                user: {
                    email: user.email
                }
            }
        })).count > 0
    }
}

export {
    signin,
    signout,
}