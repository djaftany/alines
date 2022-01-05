import styles from '../styles/Input.module.css'

const TextInput = (props) => {
    return (
        <input className={styles.field} type={'text'} {...props} />
    )
}

const EmailInput = (props) => {
    return (
        <input className={styles.field} type={'email'} {...props} />
    )
}

const ButtonInput = (props) => {
    return (
        <input className={styles.btn} type={'button'} {...props} />
    )
}

const fieldError = (id) => {
    document.getElementById(id).classList.add(styles.error)
    setTimeout(() => document.getElementById(id).classList.remove(styles.error), 8000)
}

export {
    TextInput,
    EmailInput,
    ButtonInput,
    fieldError,
}