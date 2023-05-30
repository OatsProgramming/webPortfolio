import './globals.css'
import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: `Jack Oats' Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
