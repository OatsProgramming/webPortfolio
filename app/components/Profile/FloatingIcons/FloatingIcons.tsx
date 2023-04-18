'use client'
import { useEffect, useState } from 'react';
import Icon from '../../Icons/Icon'
import styles from './floatingIcons.module.css'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

const iconNames: IconNames[] =
    ['html', 'css', 'js', 'react', 'nextjs', 'zustand', 'framer', 'swr', 'vite', 'ts']

export default function FloatingIcons() {
    const [isLoading, setIsLoading] = useState(true)
    const [size, setSize] = useState(60)

    useEffect(() => {
        // Account for window size
        function changeSize() {
            if (window.innerWidth < 640) setSize(60)
            else if (window.innerWidth < 768) setSize(75)
            else if (window.innerWidth < 1024) setSize(100)
        }

        window.addEventListener('resize', changeSize)
        return () => window.removeEventListener('resize', changeSize)
    }, [])

    return (
        <>
            <div className={styles['bg']}>
                <div className={styles['marqueeContainer']}>
                    {/* Ignore: it seems that mightve not integrate typescript */}
                    <Marquee
                        velocity={12}
                        // @ts-ignore
                        minScale={0.7}
                        maxScale={1}
                        resetAfterTries={200}
                        scatterRandomly
                        onFinish={() => setIsLoading(false)}
                    >
                        {iconNames.map((iconName) => (
                            // Motion helps create wave like movement
                            <Motion
                                key={iconName}
                                initDeg={randomIntFromInterval(0, 360)}
                                direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
                                velocity={10}
                                radius={40}
                                backgroundColors={{
                                    earth: 'transparent',
                                    solarSystem: 'transparent',
                                    buffer: 'transparent'
                                }}
                            >
                                <Icon iconName={iconName} isLoading={isLoading} size={size} />
                            </Motion>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    )
}