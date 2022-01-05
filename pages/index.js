import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import Footer from '../src/comp/footer'
import Navbar from '../src/comp/navbar'
import styles from '../styles/Home.module.css'
import { user } from '../src/auth'
import { Item, Carousel } from '../src/comp/carousel'

const getServerSideProps = async (context) => {
	const cookie = parseCookies(context)[process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME]

	return {
		props: {
			user: await user(cookie)
		}
	}
}


export default function Home({ user }) {

	return (
		<div className={styles.container}>
			<Head>
				<title>Lirix</title>
				<link rel="icon" href="/img/lirix-dark.png" />
			</Head>
			<header>
				<Navbar apparence={'full'} signin={!user} signout={!!user} />
			</header>
			<main className={styles.main}>
				<Carousel delay={8} controllers>
					<Item>
						<div className={`${styles.carousel_item} ${styles.start}`}>
							<Image alt='' src={'/img/lirix-dark.png'} width={'100px'} height={'100px'} />
							<h2>Your Account</h2>
							<p>Crie sua conta para usufruir do Lirix.</p>
						</div>
					</Item>
					<Item>
						<div className={`${styles.carousel_item} ${styles.center}`}>
							<Image alt='' src={'/img/lirix-dark.png'} width={'100px'} height={'100px'} />
							<h2>Your Account</h2>
							<p>Crie sua conta para usufruir do Lirix.</p>
						</div>
					</Item>
					<Item>
						<div className={`${styles.carousel_item} ${styles.end}`}>
							<Image alt='' src={'/img/lirix-dark.png'} width={'100px'} height={'100px'} />
							<h2>Your Account</h2>
							<p>Crie sua conta para usufruir do Lirix.</p>
						</div>
					</Item>
				</Carousel>

				<section>
					<div className={styles.pub}>
						<header>
							<h1 className={styles.pub_title}>Tudo em um só</h1>
						</header>
						<main>
							<div className={styles.cards}>
								<div className={styles.card}>

								</div>
								<div className={styles.card}>

								</div>
								<div className={styles.card}>

								</div>
							</div>
						</main>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export {
	getServerSideProps
}