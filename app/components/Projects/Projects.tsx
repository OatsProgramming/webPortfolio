'use client'
import { AnimatePresence, LazyMotion, m, useInView } from "framer-motion";
import Gif from "./Gif";
import GifList from './GifList';
import { wrap } from 'popmotion'
import { useRef, useState } from "react";
import slider from "@/lib/animationVariants/slider";
import styles from './projects.module.css'
const loadFeatures = () => import('@/lib/framerFeatures/domMax').then(mod => mod.default)


export default function Projects() {
    // Create helper animation to let user know that object has swipe feature
    const ref = useRef(null)
    const isInView = useInView(ref)

    const swipeThreshold = 10_000
    const [[page, direction], setPage] = useState([0, 0])

    // Make sure page always stays within GifList.length range
    const gifIndex = wrap(0, GifList.length, page)
    
    const calculateSwipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div className={styles['grid']}>
            <LazyMotion features={loadFeatures} strict>
                <AnimatePresence custom={direction} initial={false}>
                    <m.div
                        style={{
                            position: 'absolute',
                        
                        }}
                        custom={direction}
                        variants={slider}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        key={page}
                        drag='x'
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        onDragEnd={(e, info) => {
                            const { offset, velocity } = info
                            const swipePower = calculateSwipePower(offset.x, velocity.x)
                            
                            // User swipes to the right
                            if (swipePower > swipeThreshold) paginate(-1)
                            // User swipes to the left
                            else if (swipePower < swipeThreshold) paginate(1)
                        }}
                    >
                        <Gif {...GifList[gifIndex]} />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga commodi, expedita cupiditate neque molestiae assumenda eius exercitationem suscipit. Optio, ad? Id, veniam fugiat?
                        </div>
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
            <div className={styles['next']} onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className={styles['prev']} onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </div>
    )
}