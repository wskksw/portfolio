'use client'

import Image from 'next/image'
import FadeInWrapper from '../fade-in-wrapper'

export interface ImageGridSectionProps {
  header: string
  title: string
  srcs: string[]
  className?: string
}

export default function ImageGridSection({
  header,
  title,
  srcs,
  className,
}: ImageGridSectionProps) {
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
      <div className="mt-16 flex flex-wrap-reverse gap-5">
        {srcs.map((src, index) => (
          <FadeInWrapper
            key={index}
            className="relative aspect-[4/3] min-w-[600px] flex-1"
            delay={index * 0.05}
          >
            <Image
              fill
              src={src}
              alt="Profile Image"
              className="object-cover object-center"
            />
          </FadeInWrapper>
        ))}
      </div>
    </section>
  )
}
