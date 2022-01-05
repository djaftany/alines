import { setCookie } from 'nookies'
import { user } from '../src/auth'

const modes = {
    signin: async ({ email, token }) => {
        const _user = await user(token)
        return _user
    },

    signup: async ({ email, token }) => {
        const user = await (await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/users/${token}?api_secret=${process.env.NEXT_PUBLIC_API_SECRET}`,
            {
                method: 'post',
                headers: new Headers({ 'Content-Type': 'Application/json' }),
                body: JSON.stringify({ state: 'VERIFIED' })
            }
        )).json()

        return user
    }
}
const getServerSideProps = async (context) => {
    const email = context.query.email
    const token = context.query.token
    const mode = context.query.mode

    try {
        if ((await modes[mode]({ email, token })).state == 'VERIFIED')
            setCookie(context, process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, token, {
                maxAge: 60 * 60 * 1 // 1hour
            })

        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    } catch (error) {
        console.log(error);
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            }
        }
    }
}

const Confirm = () => {

    return (
        <>
        </>
    )
}

export default Confirm
export {
    getServerSideProps
}