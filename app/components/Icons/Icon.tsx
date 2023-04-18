'use client'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export default function Icon({ size = 100, iconName, gray }: IconProps){
    const [icon, setIcon] = useState('' as unknown as StaticImageData)
    // Icons that are hard to see in dark mode 
    // ( wont invert on its own unless svg is exported as component )
    const darkMode = ['nextjs', 'framer', 'swr']

    // zustandIcon is a png
    import(`@/public/techStack/${iconName}Icon.${iconName === 'zustand' ? 'png' : 'svg'}`)
        .then(mod => setIcon(mod.default))
        .catch(err => console.log(err))

    return (
        <Image 
            src={icon} 
            // If png, increase size by 2
            width={`${iconName === 'zustand' ? size * 2 : size }`} 
            alt={iconName} 
            className={`
                ${darkMode.includes(iconName) && 'invert'}
                ${gray && 'gray'}
            `}/>
    )
}

