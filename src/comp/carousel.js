import { useEffect } from 'react'
import styles from '../../styles/Carousel.module.css'
const DURATION = 1000

const NEXT = `.${styles.next}`
const PREV = `.${styles.prev}`
const ITEM = styles.carousel_item

const C = styles.center
const R = styles.right
const L = styles.left

const CR = styles.slide_center_right
const RC = styles.slide_right_center
const LC = styles.slide_left_center
const CL = styles.slide_center_left

const Carousell = ({ delay, carousel }) => {
    let executing = false
    let timer = setTimeout(() => { }, 0)
    const touch = {
        start: 0,
        end: 0
    }
    const moves = {
        next: (cards) => {
            cards.actu.classList.remove(C)
            cards.actu.classList.add(CR, R)
            cards.next.classList.add(LC, C)

            setTimeout(() => {
                cards.actu.classList.remove(CR, R)
                cards.next.classList.remove(LC)
            }, DURATION)
        },

        prev: (cards) => {
            cards.actu.classList.remove(C)
            cards.actu.classList.add(CL, L)
            cards.prev.classList.add(RC, C)

            setTimeout(() => {
                cards.actu.classList.remove(CL, L)
                cards.prev.classList.remove(RC)
            }, DURATION)
        }
    }

    carousel.ontouchstart = (e) => {
        touch.start = e.touches[0].clientX
    }

    carousel.ontouchmove = (e) => {
        touch.end = e.touches[0].clientX
    }

    carousel.ontouchend = () => {
        if (touch.start - touch.end < -100 && touch.end != 0) execute('next')
        if (touch.start - touch.end > 100 && touch.end != 0) execute('prev')
        touch.start = 0
        touch.end = 0
    }

    carousel.querySelector(NEXT).onclick = () => execute('next')
    carousel.querySelector(PREV).onclick = () => execute('prev')
    carousel.getElementsByClassName(ITEM)[0]?.classList.add(C)

    const getCards = () => {
        const items = Array.from(carousel.getElementsByClassName(ITEM))
        const i = items.indexOf(items.find(item => { return item.classList.contains(C) }))
        return {
            next: items[i + 1 > items.length - 1 ? 0 : i + 1],
            prev: items[i - 1 < 0 ? items.length - 1 : i - 1],
            actu: items[i]
        }
    }

    const execute = (name) => {
        const cards = getCards()
        if (!cards || executing) return

        executing = true
        setTimeout(() => executing = false, DURATION)

        if (moves[name]) moves[name](cards)

        clearTimeout(timer)
        timer = setTimeout(() => execute('next'), delay * 1000)
    }

    return {
        execute,
    }
}

const Carousel = ({ children, delay, controllers }) => {
    useEffect(() => {
        const carousels = document.getElementsByClassName(styles.carousel)
        for (const carousel of carousels) new Carousell({ carousel, delay }).execute()
    })

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_content}>
                {children}
            </div>
            <div className={controllers ? styles.carousel_controllers : styles.hide_carousel_controllers}>
                <span className={`${styles.prev} ${styles.carousel_controller}`}></span>
                <span className={`${styles.next} ${styles.carousel_controller}`}></span>
            </div>
        </div>
    )
}

const Item = ({ children }) => {
    return (
        <div className={styles.carousel_item}>
            {children}
        </div>
    )
}

export {
    Carousel,
    Item,
}