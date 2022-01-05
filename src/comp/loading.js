import styles from '../styles/Loading.module.css'
import Image from 'next/image'

const Loading = () => {

    return (
        <div className={styles.loading} id={'loading'}>
            <div className={styles.loading_content}>
                <Image className={styles.loading_img} src='/lirix-dark.png' alt=''/>
            </div>
        </div>
    )
}

const show = () => {
    document.getElementById('loading').classList.remove(styles.hide)
    document.getElementById('loading').classList.add(styles.show)
}

const hide = () => {
    document.getElementById('loading').classList.remove(styles.show)
    document.getElementById('loading').classList.add(styles.hide)
    setTimeout(() => document.getElementById('loading').classList.remove(styles.hide), 700)
}

export {
    Loading,
    show,
    hide,
}