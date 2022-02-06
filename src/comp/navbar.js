import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../../styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Exploring = () => {
    return (
        <li className={styles.nav_item}>
            <Link href={'/'}><a id={'home'} href={'#'} className={styles.nav_link}>Exploring</a></Link>
        </li>
    )
}

const Dashboard = () => {
    return (
        <li className={`${styles.nav_item} ${styles.dropdown}`}>
            <a id={'dashboard'} href={'#'} className={`${styles.nav_link} ${styles.dropdown_toggler}`} aria-label={styles.dashboardMenu}>Dashboard</a>
            <ul className={`${styles.dropdown_menu}`} id={styles.dashboardMenu}>
                <li className={styles.dropdown_item}>
                    <Link href={'/dashboard/realtime'}>
                        <a id={'realtime'} className={styles.dropdown_link} href='#'>Real Time</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'dashboard/humanresources'}>
                        <a id={'humanresources'} className={styles.dropdown_link} href='#'>Human Resources</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'/dashboard/settings'}>
                        <a id={'settings'} className={styles.dropdown_link} href='#'>System Settings</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'/dashboard/reports'}>
                        <a id={'reports'} className={styles.dropdown_link} href='#'>System Reports</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
            </ul>
        </li>
    )
}

const Feactures = () => {
    return (
        <li className={`${styles.nav_item} ${styles.dropdown}`}>
            <Link href={'#'}><a href={'#'} className={`${styles.nav_link} ${styles.dropdown_toggler}`} aria-label={styles.featuresMenu} id={'features'}>Features</a></Link>
            <ul className={`${styles.dropdown_menu}`} id={styles.featuresMenu}>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'realtime'} className={styles.dropdown_link} href='#'>Real Time</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'humanresources'} className={styles.dropdown_link} href='#'>Human Resources</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'/dashboard/settings'} className={styles.dropdown_link} href='#'>System Settings</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'systemReports'} className={styles.dropdown_link} href='#'>System Reports</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
            </ul>
        </li>
    )
}

const Account = () => {
    return (
        <li className={`${styles.nav_item} ${styles.dropdown}`}>
            <Link href={'#'}><a href={'#'} className={`${styles.nav_link} ${styles.dropdown_toggler}`} id={'account'} aria-label={styles.accountMenu}>Account</a></Link>
            <ul className={`${styles.dropdown_menu}`} id={styles.accountMenu}>
                <li className={styles.dropdown_item}>
                    <Link href={'/account/data'}>
                        <a id={'data'} className={styles.dropdown_link} href='#'>Meus Dados</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Edite suas informações e mantenha a sua conta atualizada.
                            Pode decidir também sobre como suas informações serão tratadas.
                        </p>
                        <p>Lembre-se de corrigir eventuais error ortográficos, afinal,
                            informações corretas são o melhor pra todos.
                        </p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'humanresources'} className={styles.dropdown_link} href='#'>Human Resources</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'systemSettings'} className={styles.dropdown_link} href='#'>System Settings</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
                <li className={styles.dropdown_item}>
                    <Link href={'#'}>
                        <a id={'systemReports'} className={styles.dropdown_link} href='#'>System Reports</a>
                    </Link>
                    <div className={styles.content}>
                        <p>Pode ver o que está acontencendo</p>
                    </div>
                </li>
            </ul>
        </li>
    )
}

const Support = () => {
    return (
        <li className={styles.nav_item}>
            <Link href={'/support'}><a href={'#'} className={styles.nav_link} id={'support'}>Support</a></Link>
        </li>
    )
}

const Signin = () => {
    return (
        <li className={styles.nav_item} id={styles.signinItem}>
            <Link href={'/signin'}><a href={'/signin'} className={styles.nav_link} id={styles.signinBtn}>Sign in</a></Link>
        </li>
    )
}

const Signup = () => {
    return (
        <li className={styles.nav_item} id={styles.signinItem}>
            <Link href={'/signup'}><a href={'/signup'} className={styles.nav_link} id={styles.signinBtn}>Sign up</a></Link>
        </li>
    )
}

const Signout = () => {
    return (
        <li className={styles.nav_item} id={styles.signinItem}>
            <Link href={'/signout'}><a href={'/signout'} className={styles.nav_link} id={styles.signinBtn}>Sign out</a></Link>
        </li>
    )
}

const handle = (active) => {
    for (const toggler of document.getElementsByClassName(styles.navbar_toggler)) {
        const toggle = document.getElementById(toggler.getAttribute('aria-label'))
        toggler.onclick = () => {
            toggle.classList.toggle(styles.open)
            toggler.classList.toggle(styles.toggled)
        }
    }

    for (const dropdown of document.getElementsByClassName(styles.dropdown)) {
        const toggler = dropdown.getElementsByClassName(styles.dropdown_toggler)[0]
        toggler.onclick = () => document.getElementById(toggler.getAttribute('aria-label')).classList.toggle(styles.open)
    }

    document.getElementById(active ? active : 'home')?.classList.add(styles.active)
}

const CompactNavbar = ({ signin, signup, signout }) => {
    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>
                    <Link href={'/'}>
                        <a>
                            <Image src={'/img/lirix-dark.png'} width={'30%'} height={'30%'} alt='' />
                        </a>
                    </Link>
                </h1>
                <span className={styles.navbar_toggler} aria-label={'toggle'}></span>
                <div className={styles.navbar_toggle} id={'toggle'}>
                    <nav className={styles.navbar_nav}>
                        <ul className={styles.nav}>
                            <Support />
                            {signin ? <Signin /> : signup ? <Signup /> : signout ? <Signout /> : undefined}
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}

const FullNavbar = ({ signin, signup, signout }) => {
    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>
                    <Link href={'/'}>
                        <a>
                            <Image src={'/img/lirix-dark.png'} width={'30%'} height={'30%'} alt='' />
                        </a>
                    </Link>
                </h1>
                <span className={styles.navbar_toggler} aria-label={'toggle'}></span>
                <div className={styles.navbar_toggle} id={'toggle'}>
                    <nav className={styles.navbar_nav}>
                        <ul className={styles.nav}>
                            <Exploring />
                            <Dashboard />
                            <Feactures />
                            <Account />
                            <Support />
                            {signin ? <Signin /> : signup ? <Signup /> : signout ? <Signout /> : undefined}
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}

const navbars = {
    compact: CompactNavbar,
    full: FullNavbar,
}

const Navbar = ({ apparence, signin, signup, signout }) => {
    const active = useRouter().pathname.split('/')[1]
    useEffect(() => handle(active))

    return navbars[apparence]({ signin, signup, signout })
}



export default Navbar