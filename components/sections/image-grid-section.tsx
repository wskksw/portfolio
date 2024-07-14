'use client'

import Image from 'next/image'
import FadeInWrapper from '../fade-in-wrapper'
import InnerParallaxImage from '../inner-parallax-image'
import { Media } from '@/data/projects'
import Video from '../video'

export interface MediaGridSectionProps {
  header: string
  title: string
  media: Media[]
  className?: string
}

export default function MediaGridSection({
  header,
  title,
  media,
  className,
}: MediaGridSectionProps) {
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
        {media.map((data, index) => (
          <FadeInWrapper
            key={index}
            className="relative aspect-[4/3] min-w-[600px] flex-1"
            delay={index * 0.05}
          >
            {data.type === 'image' && (
              <InnerParallaxImage src={data.src} alt="Grid Image" />
            )}
            {data.type === 'video' && <Video src={data.src} />}
          </FadeInWrapper>
        ))}
      </div>
    </section>
  )
}
