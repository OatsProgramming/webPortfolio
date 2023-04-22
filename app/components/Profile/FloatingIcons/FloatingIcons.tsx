'use client'
import { useEffect, useState } from 'react';
import Icon from '../../Icons/Icon'
import styles from './floatingIcons.module.css'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import iconNames from '../../Icons/iconNames';

function changeSize() {
    if (typeof window !== 'undefined'){
        const width = window.innerWidth
        if (width < 460)        return 45
        else if (width < 640)   return 60
        else if (width < 768)   return 75
        else                    return 100
    }
}

export default function FloatingIcons() {
    const [isLoading, setIsLoading] = useState(true)
    // Get initial size when site loads
    const [size, setSize] = useState(changeSize)

    useEffect(() => {
        // Account for window size change
        function handleEvent() {
           setSize(changeSize)
        }

        window.addEventListener('resize', handleEvent)
        return () => window.removeEventListener('resize', handleEvent)
    }, [isLoading])

    return (
        <>
            <div className={styles['bg']}>
                <div className={styles['marqueeContainer']}>
                    {/* Ignore: it seems that mightve not integrate typescript */}
                    <Marquee
                        velocity={12}
                        // @ts-ignore
                        minScale={0.7}
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
                                // Toggled around to find the sweet spot for loading
                                // Seems like smaller the screen = 
                                // smaller the radius and size must be for better loading
                                radius={size === 45 ? 25 : 35}
                                backgroundColors={{
                                    earth: 'transparent',
                                    solarSystem: 'transparent',
                                    buffer: 'transparent'
                                }}
                            >
                                <Icon iconName={iconName} isLoading={isLoading} size={size} isInBackground />
                            </Motion>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    )
}