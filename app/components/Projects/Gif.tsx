import Link from 'next/link';
import styles from './projects.module.css'
import Image from "next/image";

export default function Gif({ initial, gif, alt, link }: GifProps) {
    return (
        <div className={styles['container']}>
            <Link href={link}>
                <Image className={styles['static']} src={initial} alt={`${alt} (static)`} />
                <Image className={styles['dynamic']} src={gif} alt={`${alt} (gif)`} />
            </Link>
        </div>
    )
}