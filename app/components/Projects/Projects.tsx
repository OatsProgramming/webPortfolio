import blogGif from '@/public/blogSpaceGif.gif'
import blogInitial from '@/public/blogSpace.png'
import Gif from "./Gif";

export default function Projects() {
    return (
        <>
            <Gif link="https://blog-space-eta.vercel.app/" initial={blogInitial} gif={blogGif} alt="Blog Space"/>
            <Gif link="https://blog-space-eta.vercel.app/" initial={blogInitial} gif={blogGif} alt="Blog Space"/>
            <Gif link="https://blog-space-eta.vercel.app/" initial={blogInitial} gif={blogGif} alt="Blog Space"/>
        </>
        
    )
}