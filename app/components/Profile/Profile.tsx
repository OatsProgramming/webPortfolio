'use client'

import Image from "next/image"
import profile from '@/public/profile.svg'
import styles from './profile.module.css'
import { useState } from "react"
import AnimateText from "./AnimateText"

export default function Profile() {
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
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <div style={{
                border: '1px solid black',

            }}>
                <h1>Hi there! I'm</h1>
                <AnimateText go={go} toggleGo={toggleGo} text={name}/>
                <AnimateText go={!go} toggleGo={toggleGo} text={description}/>
            </div>
            <Image src={profile} alt='Profile image' className={styles['profile']} />
        </div>
    )
}


