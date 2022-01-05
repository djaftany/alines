import { useEffect } from "react"
import { ButtonInput, EmailInput, fieldError, TextInput } from "../src/comp/input"
import Navbar from "../src/comp/navbar"
import styles from '../styles/Signup.module.css'
import { hide, Loading, show } from '../src/comp/loading'
import Head from "next/head"

const signup = async ({ name, email }) => {

    return await (await fetch(
        `/api/users?api_secret=${process.env.NEXT_PUBLIC_API_SECRET}`,
        {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'Application/json' }),
            body: JSON.stringify({ name, email })
        }
    )).json()
}

const handle = () => {
    const form = document.forms.namedItem('form')
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    form.onsubmit = async (e) => {
        e.preventDefault()

        try {
            show()
            await signup({ name: name.value, email: email.value })
        } catch (error) {
            hide()
            fieldError('email')
        }

        hide()
    }
}

const Signup = () => {

    useEffect(handle)

    return (
        <>
            <Head>
                <title>Lirix</title>
                <link rel="icon" href="/lirix-dark.png" />
            </Head>
            <header>
                <Navbar apparence={'compact'} signin />
            </header>
            <main className={styles.main}>
                <form className={styles.form} name={'form'}>
                    <EmailInput placeholder={'Email'} id={'email'} required />
                    <TextInput placeholder={'Name'} id={'name'} required />
                    <ButtonInput value={'Criar'} type={'submit'} />
                </form>
            </main>
            <Loading />
        </>
    )
}

export default Signup