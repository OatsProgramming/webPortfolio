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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
