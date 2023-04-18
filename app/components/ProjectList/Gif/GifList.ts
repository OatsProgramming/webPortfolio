import blogGif from '@/public/projectGifs/blogSpaceGif.gif'
import blogInitial from '@/public/projectGifs/blogSpace.png'
import todoGif from '@/public/projectGifs/todoGif.gif'
import todoInitial from '@/public/projectGifs/todo.png'

const GifList: GifProps[] = [
    {
        link: "https://blog-space-eta.vercel.app/",
        initial: blogInitial,
        gif: blogGif,
        alt: "Blog Space",
        icons: ['nextjs', 'react', 'framer', 'zustand', 'swr']
    },
    {
        link: "https://blog-space-eta.vercel.app/",
        initial: blogInitial,
        gif: blogGif,
        alt: "Blog Space",
        icons: ['nextjs', 'react', 'framer', 'zustand', 'swr']
    },
    {
        link: "https://todo-app-ruby-seven.vercel.app/",
        initial: todoInitial,
        gif: todoGif,
        alt: "Todo App",
        icons: ['react', 'vite', 'framer']
    },
]

export default GifList 