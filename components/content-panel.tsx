import FadeInWrapper from '@/components/fade-in-wrapper'
import Header from '@/components/header'

interface ContentPanelProps {
  header: string
  title: string
  content: string
}

export default function ContentPanel({
  header,
  title,
  content,
}: ContentPanelProps) {
  return (
    <>
      <Header header={header} title={title} />
      <FadeInWrapper>
        <p className="mt-8 text-[1.5rem] text-muted-foreground">{content}</p>
      </FadeInWrapper>
    </>
  )
}
