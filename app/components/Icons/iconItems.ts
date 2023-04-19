import html from '@/public/techStack/htmlIcon.svg'
import css from '@/public/techStack/cssIcon.svg'
import js from '@/public/techStack/jsIcon.svg'
import react from '@/public/techStack/reactIcon.svg'
import nextjs from '@/public/techStack/nextjsIcon.svg'
import zustand from '@/public/techStack/zustandIcon.png'
import framer from '@/public/techStack/framerIcon.svg'
import swr from '@/public/techStack/swrIcon.svg'
import vite from '@/public/techStack/viteIcon.svg'
import ts from '@/public/techStack/tsIcon.svg'

// hashmap it
const iconItems: IconItems = {
    html: {
        img: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    css: {
        img: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    js: {
        img: js,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    react: {
        img: react,
        link: "https://react.dev/",
    },
    nextjs: {
        img: nextjs,
        link: "https://nextjs.org/",
    },
    zustand: {
        img: zustand,
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    },
    framer: {
        img: framer,
        link: "https://www.framer.com/motion/",
    },
    swr: {
        img: swr,
        link: "https://swr.vercel.app/",
    },
    vite: {
        img: vite,
        link: "https://vitejs.dev/",
    },
    ts: {
        img: ts,
        link: "https://www.typescriptlang.org/",
    },
}

export default iconItems