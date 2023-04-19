import Image from 'next/image'
import iconList from './iconList'

export default function Icon({ size = 100, iconName, isLoading }: IconProps){
    // Icons that are hard to see in dark mode 
    // ( wont invert on its own unless svg is exported as component )
    const darkMode = ['nextjs', 'framer', 'swr']
    const changeSize = (iconName === 'zustand') || (iconName === 'swr')

    return (
        <Image 
            src={iconList[iconName]} 
            // If png, increase size by 2
            width={`${changeSize ? size * 2 : size }`} 
            alt={iconName} 
            style={{
                // border: '1px solid red'
            }}
            className={`
                icon
                ${darkMode.includes(iconName) && 'invert'}
                ${isLoading && 'loading'}
            `}/>
    )
}