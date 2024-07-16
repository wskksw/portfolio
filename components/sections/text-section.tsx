'use client'

import { cn } from '@/lib/utils'
import FadeInWrapper from '../fade-in-wrapper'
import Markdown from '../markdown'

interface TextSectionProps {
  header: string
  title: string
  content: {
    title: string | React.ReactNode
    description: string
  }[]
  className?: string
}

export default function TextSection({
  header,
  title,
  content,
  className,
}: TextSectionProps) {
  return (
    <section className={className}>
      <FadeInWrapper>
        <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
          {header.toUpperCase()}
        </h4>
      </FadeInWrapper>
      <FadeInWrapper>
        <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
      </FadeInWrapper>
      <div className="mt-16 border-border">
        {content.map((item, index) => (
          <FadeInWrapper
            key={index}
            className={cn(
              'flex flex-col gap-5 border-border py-8 lg:flex-row',
              index === 0 ? 'border-y' : 'border-b',
            )}
            delay={index * 0.05}
          >
            <div className="flex-1 text-[1.5rem] font-bold">
              <p className="w-full lg:w-2/3">{item.title}</p>
            </div>
            <p className="flex-1 text-pretty text-[1.5rem] text-muted-foreground">
              <Markdown content={item.description} />
            </p>
          </FadeInWrapper>
        ))}
      </div>
    </section>
  )
}
