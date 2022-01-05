import Head from "next/head"
import { parseCookies } from "nookies"
import { useEffect } from "react"
import { signin, user } from "../src/auth"
import { ButtonInput, EmailInput, fieldError } from "../src/comp/input"
import { hide, Loading, show } from "../src/comp/loading"
import Navbar from "../src/comp/navbar"
import styles from '../styles/Signin.module.css'

const getServerSideProps = async (context) => {
    const cookie = parseCookies(context)[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME]

    if (await user(cookie)) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Success = () => {

    return (
        <>
            <main className={styles.success} id={'success'}>
                <p>
                    Enviamos um email para o endereço <strong><span id="address"></span> </strong>
                    com o código:
                </p>
                <span className={styles.code} id={'code'}></span>
                <p>Siga as instruções para completar o processo de login.</p>
            </main>
        </>
    )
}

const Signin = () => {
    const handle = async () => {
        const form = document.forms.namedItem('form')
        const email = document.getElementById('email')

        form.onsubmit = async (e) => {
            e.preventDefault()
            show()
            const code = await signin(email.value)
            if (code) {
                hide()
                document.getElementById('code').innerText = code
                document.getElementById('address').innerText = email.value
                document.getElementById('success').classList.add(styles.show)
            } else {
                hide()
                fieldError('email')
            }
        }
    }

    useEffect(handle)

    return (
        <>
            <Head>
                <title>aLines</title>
                <link rel="icon" href="/lirix-dark.png" />
            </Head>
            <header>
                <Navbar apparence={'compact'} signup />
            </header>
            <main className={styles.main}>
                <form className={styles.form} name={'form'}>
                    <EmailInput placeholder={'Email'} id={'email'} required />
                    <ButtonInput type={'submit'} value={'Continuar'} />
                </form>
            </main>
            <Loading />
            <Success />
        </>
    )
}

export default Signin
export {
    getServerSideProps
}