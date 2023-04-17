import { CSSProperties } from 'react'
import styles from './profile.module.css'

export default function AnimateText({ go, toggleGo, text }: AnimateTextProps) {
    return (
        <div
            className={`
                ${go && styles['word']} 
                ${go && styles['animate']}
                ${go ? '' : 'hidden'}
            `}
            style={{ "--charCount": text.length } as CSSProperties}
            onAnimationEnd={toggleGo}
        >
            {text}
        </div>
    )
}