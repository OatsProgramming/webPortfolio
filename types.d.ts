type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
}

type AnimateTextProps = {
    go: boolean,
    toggleGo: () => void,
    text: string
}

type ProjectItem = {
    initial: StaticImageData,
    gif: StaticImageData,
    alt: string,
    link: string,
    icons: IconNames[],
    title: string,
    body: string | string[],
    repo: string,
}

type IconNames = 'html' | 'css' | 'js' | 'ts' | 'react' | 'vite' | 'nextjs' | 'zustand' | 'framer' | 'swr' | 'git' | 'github' | 'firebase' | 'cssModule' | 'linkedin'

type IconProps = {
    size?: number,
    iconName: IconNames,
    isLoading?: boolean,
    isInBackground?: true,
    overrideInvert?: boolean,
} 

type IconItems = Record<IconNames, {
    img: StaticImageData,
    link: string
}>

type Email = {
    email: string,
    name: string,
    message: string,
}

type EmailPartial = Partial<Email>

type Action = {
    type: 'sending' | 'updating' | 'deleting',
    newInfo?: EmailPartial,
    form?: HTMLFormElement | null,
    isDark?: boolean
}