import type { Metadata } from 'next'
import './globals.css'
import { HelveticaNowDisplay } from '@/fonts/fonts'
import { SidebarProvider } from '@/providers/use-sidebars'
import { Toaster } from '@/components/ui/toaster'

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
      <body className={HelveticaNowDisplay.className}>
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster />
      </body>
    </html>
  )
}
