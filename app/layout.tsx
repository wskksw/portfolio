import type { Metadata } from 'next'
import './globals.css'
import { HelveticaNowDisplay } from '@/fonts/fonts'
import { SidebarProvider } from '@/providers/use-sidebars'
import { Toaster } from '@/components/ui/toaster'
import { TransitionProvider } from '@/providers/use-transition'
import { GridProvider } from '@/providers/use-grid'

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
    <html
      lang="en"
      className="hide-scrollbar text-[10px] sm:text-[12px] md:text-[16px] lg:text-[12px] 2xl:text-[16px]"
    >
      <body className={HelveticaNowDisplay.className}>
        <GridProvider>
          <SidebarProvider>
            <TransitionProvider>{children}</TransitionProvider>
          </SidebarProvider>
        </GridProvider>
        <Toaster />
      </body>
    </html>
  )
}
