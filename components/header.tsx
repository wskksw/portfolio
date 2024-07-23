import FadeInWrapper from './fade-in-wrapper'

interface HeaderProps {
  header: string
  title: string
}

export default function Header({ header, title }: HeaderProps) {
  return (
    <>
      <FadeInWrapper>
        <h4 className="text-lg tracking-[0.3rem] text-muted-foreground">
          {header.toUpperCase()}
        </h4>
      </FadeInWrapper>
      <FadeInWrapper>
        <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
      </FadeInWrapper>
    </>
  )
}
