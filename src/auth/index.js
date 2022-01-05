import { destroyCookie } from "nookies"

const signin = async (email) => {
    if (!email) return null

    try {
        const { code } = await (await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/users/${email}?api_secret=${process.env.NEXT_PUBLIC_API_SECRET}&mode=signin`,
            {
                method: 'post',
            }
        )).json()

        return code
    } catch (error) {
        return null
    }
}

const signout = async (cookie) => {
    if (!cookie) return null

    try {        
        const { success } = await (await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/users/${cookie}?api_secret=${process.env.NEXT_PUBLIC_API_SECRET}&mode=signout`,
            {
                method: 'post'
            }
        )).json()

        destroyCookie(null, process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)

        return success
    } catch (error) {
        return null
    }
}

const user = async (token) => {
    if (!token) return null

    try {
        return await (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/${token}?api_secret=${process.env.NEXT_PUBLIC_API_SECRET}`)).json()
    } catch (error) {
        return null
    }
}

export {
    signin,
    signout,
    user,
}