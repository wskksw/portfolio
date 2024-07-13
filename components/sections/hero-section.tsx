'use client'

import Image from 'next/image'
import ArrowButton from '../arrow-button'
import { motion } from 'framer-motion'
import FadeInWrapper from '../fade-in-wrapper'
import InnerParallaxImage from '../inner-parallax-image'

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
  return (
    <section className="flex gap-5">
      <div className="flex w-full flex-1 items-end">
        <div>
          <FadeInWrapper>
            <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
              {header.toUpperCase()}
            </h4>
          </FadeInWrapper>
          <FadeInWrapper>
            <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
          </FadeInWrapper>
          <FadeInWrapper>
            <p className="mt-8 text-[1.5rem] text-muted-foreground">
              {content}
            </p>
          </FadeInWrapper>
          <div className="mt-6 flex w-2/3 items-center justify-between gap-5">
            <FadeInWrapper className="flex-1">
              <ArrowButton
                title="Projects"
                arrowColor="#FFF"
                className="w-full"
              />
            </FadeInWrapper>
            <FadeInWrapper delay={0.05} className="flex-1">
              <ArrowButton
                title="Contact"
                arrowColor="#FFF"
                className="w-full"
              />
            </FadeInWrapper>
          </div>
        </div>
      </div>
      <FadeInWrapper className="relative aspect-[4/3] w-full flex-1">
        <InnerParallaxImage src={src} alt="Profile Image" />
      </FadeInWrapper>
    </section>
  )
}
