import Image from 'next/image'
import iconItems from './iconItems'
import Link from 'next/link'

export default function Icon({ size = 100, iconName, isLoading, isInBackground, overrideInvert = false }: IconProps) {
    // Icons that are hard to see in dark mode 
    // ( wont invert on its own unless svg is exported as component )
    const darkMode = new Set<IconNames>(['nextjs', 'framer', 'swr', 'github', 'cssModule', 'linkedin'])
    const tooSmall = new Set<IconNames>(['swr', 'zustand', 'cssModule'])

    const imgComp = (
        <Image
            src={iconItems[iconName].img}
            width={`${tooSmall.has(iconName) ? size * 2 : size}`}
            alt={iconName}
            className={`
                icon
                ${(darkMode.has(iconName) && !overrideInvert) && 'invert'}
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