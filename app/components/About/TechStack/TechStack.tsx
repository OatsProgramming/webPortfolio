'use client'

import { useState, useEffect } from "react"
import Icon from "../../Icons/Icon"
import styles from './techStack.module.css'
import iconNames from "../../Icons/iconNames"
import doNothing from "@/lib/doNothing"

export default function TechStack() {
    const [isVisible, setIsVisible] = useState(false)
    const [isClickable, setIsClickable] = useState(false)

    // On mobile, it automatically jumps to HTML docs
    // Prevent it by giving it a delay
    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setIsClickable(true)
            }, 350)
        } else {
            setIsClickable(false)
        }

    }, [isVisible])

    return (
        <>
            {/* Initial: background ping */}
            {/* Visible: Show tech stack */}
            <div
                className={`
                    ${styles['icons']} 
                    ${isVisible ? styles['visible'] : styles['ping']}
                `}
            >
                {!isVisible && (
                    // To give ping the proper color since it's overflowing already (DONT REMOVE OR CHANGE OVERFLOW)
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z" />
                    </svg>
                )}
                {iconNames.map((icon) => (
                    <div key={icon}
                        className={`
                            link
                            ${!isClickable && styles['notClickable']}
                        `}>
                        <Icon iconName={icon} size={75} overrideInvert />
                    </div>
                ))}
            </div>

            {/* Easier to have this instead of using css */}
            {isVisible && <br />}

            {/* Toggle for tech stack */}
            <div
                className={`
                    ${styles['box']}
                    ${!isVisible && styles['moveBox']}
                `}
                onPointerDown={() => setIsVisible(!isVisible)}
                onClick={doNothing}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                </svg>
            </div>
        </>
    )
}