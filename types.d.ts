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
    body: string | string[],
    repo: string,
}

type IconNames = 'html' | 'css' | 'js' | 'ts' | 'react' | 'vite' | 'nextjs' | 'zustand' | 'framer' | 'swr' | 'git' | 'github' | 'firebase'

type IconProps = {
    size?: number,
    iconName: IconNames,
    isLoading?: boolean,
    isInBackground?: true
} 

type IconItems = {
    [key: string]: {
        img: StaticImageData,
        link: string
    }
}