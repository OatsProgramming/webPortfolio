import Image from 'next/image'
import iconItems from './iconItems'
import Link from 'next/link'

export default function Icon({ size = 100, iconName, isLoading, isInBackground }: IconProps) {
    // Icons that are hard to see in dark mode 
    // ( wont invert on its own unless svg is exported as component )
    const darkMode: IconNames[] = ['nextjs', 'framer', 'swr', 'github']
    const changeSize = (iconName === 'zustand') || (iconName === 'swr')
    const imgComp = (
        <Image
            src={iconItems[iconName].img}
            // If png, increase size by 2
            width={`${changeSize ? size * 2 : size}`}
            alt={iconName}
            className={`
                icon
                ${darkMode.includes(iconName) && 'invert'}
                ${isLoading && 'loading'}
            `} />
    )

    if (isInBackground) return imgComp
    return (
        <Link href={iconItems[iconName].link} target='_blank' rel='noreferrer noopener'>
            {imgComp}
        </Link>
    )
}