import TechStack from './TechStack/TechStack'
import styles from './about.module.css'

// So that it can use pre-wrap
const content = {
    bodyOne: `I am a Generalist: one that enjoys to explore and educate oneself with various topics like modern philosophical debates, psychology behind design, or web dev tech.`,
    bodyTwo: `  Your person for the job: a multidisciplinary developer and ever-evolving designer. Check out my current tech stack!
    `
}


export default function About() {
    return (
        <div className={styles['container']}>
            <div className={styles['text']}>
                <h1>Who am I?</h1>
                <i>"Improvise. Adapt. Overcome."</i>
                <p>{content.bodyOne}</p>
                <p>With that said:</p>
                <h2>Who am I to you?</h2>
                <p>{content.bodyTwo}</p>
            </div>
            <div>
                <TechStack />
            </div>
        </div>
    )
}
