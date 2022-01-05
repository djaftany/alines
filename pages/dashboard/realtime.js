import Head from 'next/head'
import Navbar from "../../components/navbar"
import { user } from '../../auth'
import { parseCookies } from 'nookies'
import styles from '../../styles/RealTime.module.css'
import Footer from '../../components/footer'


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

const RealTime = ({user}) => {
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
                <div className={styles.notications} id={styles.notications}>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default RealTime

export {
    getServerSideProps
}