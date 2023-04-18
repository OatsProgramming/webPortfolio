'use client'
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

