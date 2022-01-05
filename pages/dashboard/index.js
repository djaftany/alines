import Head from 'next/head'
import Navbar from "../../src/comp/navbar"
import { user } from '../../src/auth'
import { parseCookies } from 'nookies'

const getServerSideProps = async (context) => {
    const cookie = parseCookies(context)[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME]
    const _user = await user(cookie)
    if (!_user) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            }
        }
    }

    return {
        props: {
            user: _user
        }
    }
}

const Home = ({user}) => {
    return (
        <>
            <Head>
                <title>Lirix | {user.name}</title>
                <link rel="icon" href="/lirix-dark.png" />
            </Head>
            <header>
                <Navbar apparence={'full'} signout />
            </header>
            <main>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home

export {
    getServerSideProps
}