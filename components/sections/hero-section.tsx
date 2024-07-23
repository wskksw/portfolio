'use client'

import ArrowButton from '@/components/arrow-button'
import FadeInWrapper from '@/components/fade-in-wrapper'
import InnerParallaxImage from '@/components/inner-parallax-image'
import { useTransition } from '@/providers/use-transition'
import ContentPanel from '@/components/content-panel'

interface HeroSectionProps {
  header: string
  title: string
  content: string
  src: string
}

export default function HeroSection({
  header,
  title,
  content,
  src,
}: HeroSectionProps) {
  const { transitionPage } = useTransition()

  return (
    <section className="flex flex-col gap-5 lg:flex-row">
      <div className="flex w-full flex-1 items-end">
        <div>
          <ContentPanel header={header} title={title} content={content} />
          <div className="mt-6 flex w-2/3 items-center justify-between gap-5">
            <FadeInWrapper className="flex-1">
              <ArrowButton
                title="Projects"
                arrowColor="#FFF"
                className="w-full"
                onClick={() => transitionPage('/projects')}
              />
            </FadeInWrapper>
            <FadeInWrapper delay={0.05} className="flex-1">
              <ArrowButton
                title="Contact"
                arrowColor="#FFF"
                className="w-full"
                onClick={() => transitionPage('/contact')}
              />
            </FadeInWrapper>
          </div>
        </div>
      </div>
      <FadeInWrapper className="relative mt-12 aspect-[4/3] w-full flex-1 lg:mt-0">
        <InnerParallaxImage src={src} alt="Profile Image" />
      </FadeInWrapper>
    </section>
  )
}
