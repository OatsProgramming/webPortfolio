'use client'

import Image from "next/image"
import profile from '@/public/profile/profile.svg'
import styles from './profile.module.css'
import { useState } from "react"
import AnimateText from "./AnimateText"

// Foreground
// Background: FloatingIcons
export default function FGProfile() {
    const [go, setGo] = useState(true)
    const name = "Jack Oats"
    const description = "A Software Developer"

    // Toggle which text to animate
    // If multiple, import wrap() from popmotion to use index
    function toggleGo() {
        setTimeout(() => {
            setGo(!go)
        }, 3_000)
    }

    return (
        <section className={styles['grid']}>
            <div className={styles['textbox']}>
                <h1>Hi there! I'm</h1>
                <AnimateText go={go} toggleGo={toggleGo} text={name} />
                <AnimateText go={!go} toggleGo={toggleGo} text={description} />
            </div>
            <Image src={profile} alt='Profile image' className={`${styles['profile']} invert`} />
        </section>
    )
}


