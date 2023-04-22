'use client'

import { useEffect, useReducer, useRef, useState } from 'react'
import styles from './contact.module.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import contactReducer from '@/lib/reducerFns/contactReducer'
import doNothing from '@/lib/doNothing'

// Attempt to make mobile v more enjoyable
function handleClick(e: React.PointerEvent) {
    const formEl = e.target as HTMLInputElement | HTMLTextAreaElement
    formEl.focus()
}

export default function Contact() {
    // useReducer for the contact info when not sleepy
    const [, dispatch] = useReducer(contactReducer, {} as Email)
    const formRef = useRef<HTMLFormElement>(null)
    const [isDark, setIsDark] = useState(() => {
        // Get initial theme
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        function handleTheme(e: MediaQueryListEvent) {
            setIsDark(e.matches)
        }

        mediaQuery.addEventListener('change', handleTheme)
        return () => mediaQuery.removeEventListener('change', handleTheme)
    }, [])

    return (
        <section className={styles['container']}>
            <h1>Let's chat!</h1>
            <form ref={formRef} className={styles['form']}>
                <div className={styles['textField']}>
                    <input type="email" id="email" name='password' placeholder=" "
                        onPointerDown={handleClick}
                        onClick={doNothing}
                        onChange={(e) => dispatch({
                            type: 'updating',
                            newInfo: { email: e.target.value }
                        })}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles['textField']}>
                    <input type="text" name='name' placeholder=" "
                        onPointerDown={handleClick}
                        onClick={doNothing}
                        onChange={(e) => dispatch({
                            type: 'updating',
                            newInfo: { name: e.target.value }
                        })}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className={styles['textField']}>
                    <textarea id='message' placeholder=''
                        onPointerDown={handleClick}
                        onClick={doNothing}
                        onChange={(e) => dispatch({
                            type: 'updating',
                            newInfo: { message: e.target.value }
                        })}
                    />
                </div>
                <div className={styles['iconsContainer']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" viewBox="0 0 16 16"
                        onClick={doNothing}
                        onPointerDown={() => dispatch({
                            type: 'deleting',
                            form: formRef.current,
                            isDark
                        })}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" viewBox="0 0 16 16"
                        onClick={doNothing}
                        onPointerDown={() => dispatch({
                            type: 'sending',
                            form: formRef.current,
                            isDark
                        })}>
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                </div>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={isDark ? 'dark' : 'light'}
            />
        </section>
    )
}