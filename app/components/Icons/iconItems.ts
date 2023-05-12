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
import firebase from '@/public/techStack/firebaseIcon.svg'
import git from '@/public/techStack/gitIcon.svg'
import github from '@/public/techStack/githubIcon.svg'
import cssModule from '@/public/techStack/cssModuleIcon.svg'
import linkedin from '@/public/contact/linkedinIcon.svg'
import nextauth from '@/public/techStack/nextauth.png'
import prisma from '@/public/techStack/prisma.png'

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
    firebase: {
        img: firebase,
        link: "https://firebase.google.com/",
    },
    git: {
        img: git,
        link: "https://git-scm.com/"
    },
    github : {
        img: github,
        link: "https://github.com/OatsProgramming"
    },
    cssModule: {
        img: cssModule,
        link: "https://github.com/css-modules/css-modules"
    },
    linkedin: {
        img: linkedin,
        link: "https://www.linkedin.com/in/oatsprogramming"
    },
    nextauth : {
        img: nextauth,
        link: 'https://next-auth.js.org/'
    },
    prisma: {
        img: prisma,
        link: 'https://www.prisma.io/'
    } 
}

export default iconItems