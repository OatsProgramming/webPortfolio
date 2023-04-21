import { ToastOptions, toast } from "react-toastify"
import emailjs from '@emailjs/browser'

const toastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}


export default function contactReducer(state: Email, action: Action): Email {
    switch (action.type) {
        case 'updating': {
            return {
                ...state,
                ...action.newInfo,
            }
        }
        case 'deleting': {
            action.form!.reset()
            return {} as Email
        }
        case 'sending': {
            const emailRegex = /^(("[\w\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w\s]+")([\w-]+(?:\.[\w-]+)*))@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
            
            if (!state.email || !state.name || !state.message) {
                // Check for missing props
                toast.error("It seems you're missing a few things...", {
                    ...toastOptions,
                    theme: action.isDark ? 'dark' : 'light',
                })
                return state

            } else if (!emailRegex.test(state.email)) {
                // Check for email validation
                toast.error("Please enter a valid email", {
                    ...toastOptions,
                    theme: action.isDark ? 'dark' : 'light',
                })
                return state
            }

            // emailjs does not work on backend; frontend only
            toast.promise(
                emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, state, `${process.env.NEXT_PUBLIC_EMAIL_KEY}`),
                {
                    pending: "Sending...",
                    error: "Email failed to send",
                    success: "Email sent"
                },
                {
                    ...toastOptions,
                    theme: action.isDark ? 'dark' : 'light',
                }
            )
            action.form!.reset()
            return state
        }
        default: {
            console.log(`Unknown action type: ${action.type}`)
            return state
        }
    }
}