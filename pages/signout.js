import { parseCookies } from "nookies"
import { signout } from "../src/auth"

const getServerSideProps = async (context) => {
    const cookie = parseCookies(context)[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME]

    await signout(cookie)

    return {
        redirect: {
            destination: '/signin',
            permanent: false,
        }
    }

}

const Signout = () => {

    return (
        <>
        </>
    )
}

export default Signout

export {
    getServerSideProps
}