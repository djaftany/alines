import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/'}><a className={styles.logo} href='#'><Image src={'/img/lirix.png'} height={'10px'} width={'10px'} alt='' /></a></Link>
            <nav className={styles.footer_nav}>
                <ul className={styles.nav}>
                    <li className={styles.nav_item}>
                        <Link href={'#'}>
                            <a href={'#'} className={styles.nav_link}>
                                Item
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href={'#'}>
                            <a href={'#'} className={styles.nav_link}>
                                Item
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href={'#'}>
                            <a href={'#'} className={styles.nav_link}>
                                Item
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href={'#'}>
                            <a href={'#'} className={styles.nav_link}>
                                Item
                            </a>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href={'#'}>
                            <a href={'#'} className={styles.nav_link}>
                                Item
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.contacts}>
                <ul className={styles.contacts_nav}>
                    <li className={styles.contact_item}><a className={styles.contact_link} href={'#'}>support@img/.com</a></li>
                    <li className={styles.contact_item}><a className={styles.contact_link} href={'#'}>Facebook</a></li>
                    <li className={styles.contact_item}><a className={styles.contact_link} href={'#'}>Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer