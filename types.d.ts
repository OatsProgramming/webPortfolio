type AnimateTextProps = {
    go: boolean,
    toggleGo: () => void,
    text: string
}

type GifProps = {
    initial: StaticImageData,
    gif: StaticImageData,
    alt: string,
    link: string,
    icons: IconNames[],
    title: string,
    body: string,
}

type IconNames = 'html' | 'css' | 'js' | 'ts' | 'react' 
                | 'vite' | 'nextjs' | 'zustand' | 'framer' | 'swr'

type IconProps = {
    size?: number,
    iconName: IconNames,
    isLoading?: boolean
} 