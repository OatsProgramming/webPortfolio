import Image from 'next/image'
import iconList from './iconList'

export default function Icon({ size = 100, iconName, gray }: IconProps){
    // Icons that are hard to see in dark mode 
    // ( wont invert on its own unless svg is exported as component )
    const darkMode = ['nextjs', 'framer', 'swr']

    return (
        <Image 
            src={iconList[iconName]} 
            // If png, increase size by 2
            width={`${iconName === 'zustand' ? size * 2 : size }`} 
            alt={iconName} 
            className={`
                ${darkMode.includes(iconName) && 'invert'}
                ${gray && 'gray'}
            `}/>
    )
}

