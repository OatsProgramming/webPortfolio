import Link from 'next/link';
import styles from './gif.module.css'
import Image from "next/image";
import { ForwardedRef, forwardRef } from 'react';
import Icon from '../../Icons/Icon';

const Gif = forwardRef(({ initial, gif, alt, link, title, body, icons, repo }: GifProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={styles['mainContainer']} >
            {/* Image */}
            <div className={styles['gifContainer']}>
                {/* Always add "rel='noreferrer noopener'" attribute to prevent tabnabbing */}
                <Link href={link} target='_blank' rel='noreferrer noopener'>
                    <Image className={styles['static']} src={initial} alt={`${alt} (static)`} />
                    <Image className={styles['dynamic']} src={gif} alt={`${alt} (gif)`} />
                </Link>
            </div>
            {/* Text */}
            {/* Using this as inView ref instead to be more mobile friendly */}
            <div className={styles['textContainer']} ref={ref}>
                {/* Title */}
                <div className={styles['flex']}>
                    <h1 style={{ display: 'inline-block' }}>{title}</h1>
                    {/* Repo / Live */}
                    <div className={styles['flex']}>
                        <Link href={repo} target='_blank' rel='noreferrer noopener' className='link'>
                            <Icon iconName='github' isInBackground size={25} />
                        </Link>
                        <Link href={link} target='_blank' rel='noreferrer noopener' className='link'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* Body */}
                <p>{body}</p>
                {/* Tech */}
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