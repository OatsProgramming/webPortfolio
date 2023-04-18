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
    icons: string[],
}


type IconProps = {
    size?: number,
    iconName: 'html' | 'css' | 'js' | 'ts' | 'react' 
            | 'vite' | 'nextjs' | 'zustand' | 'framer' | 'swr',
} 