'use client'

import FadeInWrapper from '@/components/fade-in-wrapper'
import InnerParallaxImage from '@/components/inner-parallax-image'
import { Media } from '@/data/projects'
import Video from '@/components/video'
import Header from '@/components/header'
import { cn } from '@/lib/utils'

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
      <Header header={header} title={title} />
      <div className="mt-16 flex flex-wrap-reverse gap-5">
        {media.map((data, index) => (
          <FadeInWrapper
            key={index}
            className={cn(
              'relative aspect-[4/3] min-w-[600px] flex-1 bg-primary shadow-md',
              data.className,
            )}
            delay={index * 0.05}
          >
            {data.type === 'image' && (
              <InnerParallaxImage
                src={data.src}
                alt="Grid Image"
                offset={0}
                className={data.className}
              />
            )}
            {data.type === 'video' && <Video src={data.src} />}
          </FadeInWrapper>
        ))}
      </div>
    </section>
  )
}
