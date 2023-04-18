'use client'
// import html from '@/public/techStack/htmlIcon.svg'
// import css from '@/public/techStack/cssIcon.svg'
// import js from '@/public/techStack/jsIcon.svg'
// import ts from '@/public/techStack/tsIcon.svg'
// import react from '@/public/techStack/reactIcon.svg'
// import nextjs from '@/public/techStack/nextjsIcon.svg'
// import zustand from '@/public/techStack/zustandIcon.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export default function Icon({ size = 100, iconName }: IconProps){
    const [icon, setIcon] = useState('' as unknown as StaticImageData)

    // zustand is a png 
    if (iconName === 'zustand') {
        import('@/public/techStack/zustandIcon.png')
            .then(mod => setIcon(mod.default))
            .catch(err => console.log(err))
        return (
            <Image src={icon} width={size * 2} alt={iconName}/>
        )
    }

    import(`@/public/techStack/${iconName}Icon.svg`)
        .then(mod => setIcon(mod.default))
        .catch(err => console.log(err))

    return (
        <Image src={icon} width={size} alt={iconName}/>
    )
}

