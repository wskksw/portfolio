import type { Metadata } from 'next'
import './globals.css'
import { HelveticaNowDisplay } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Jason Ramos',
  description: 'Jason Ramos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className={HelveticaNowDisplay.className}>{children}</body>
    </html>
  )
}
