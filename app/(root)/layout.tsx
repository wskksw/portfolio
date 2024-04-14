import Footer from '@/components/footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col justify-between overflow-hidden">
      <div className="flex-grow-1">{children}</div>
      <Footer />
    </div>
  )
}
