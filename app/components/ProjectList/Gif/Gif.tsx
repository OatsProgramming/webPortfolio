import Link from 'next/link';
import styles from './gif.module.css'
import Image from "next/image";
import { ForwardedRef, forwardRef } from 'react';
import Icon from '../../Icons/Icon';

const Gif = forwardRef(({ initial, gif, alt, link, title, body, icons }: GifProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        // Use this as reference for "isInView"
        <div className={styles['mainContainer']} ref={ref} >
            <div className={styles['gifContainer']}>
                {/* Always add "rel='noreferrer noopener'" attribute to prevent tabnabbing */}
                <Link href={link} target='_blank' rel='noreferrer noopener'>
                    <Image className={styles['static']} src={initial} alt={`${alt} (static)`} />
                    <Image className={styles['dynamic']} src={gif} alt={`${alt} (gif)`} />
                </Link>
            </div>
            <div className={styles['textContainer']}>
                <h1>{title}</h1>
                <p>{body}</p>
                <h3>Made with:</h3>
                <div className={styles['iconsContainer']}>
                    {icons.map(icon => (
                        <Icon key={icon} iconName={icon} size={50} />
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Gif