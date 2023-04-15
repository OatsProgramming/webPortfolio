'use client'

import Image from "next/image"
import profile from '../../public/profile.svg'
import styles from './css/profile.module.css'
import { LazyMotion, m } from "framer-motion"
import { useState } from "react"
const loadFeatures = () => import('../../lib/domAnimation').then(mod => mod.default)


export default function Profile() {
    const [go, setGo] = useState(true)
    const variant = {
       visible: {
        y: [10, 0, 0, 0, 10],
        opacity: [0, 1, 1, 1, 0],
        transition: {
            duration: 3,
            onComplete: () => setGo(!go)
            // repeat: Infinity,
            // repeatType: 'mirror'
        }
       }
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
                <LazyMotion features={loadFeatures} strict>
                   
                    <m.div
                    variants={variant}
                    animate={ go ? 'visible' : ''}
                    >
                        Jack
                    </m.div>
                    <m.div
                    variants={variant}
                    animate={ go ? 'visible' : ''}>
                        Oats
                    </m.div>
                    <m.div
                    variants={variant}
                    animate={ go ? '' : 'visible'}
                    >
                        A Software
                    </m.div>
                    <m.div
                    variants={variant}
                    animate={ go ? '' : 'visible'}>
                        Developer
                    </m.div>
                    
                </LazyMotion>
            </div>
            <Image src={profile} alt='Profile image' className={styles['profile']} />
        </div>
    )
}
