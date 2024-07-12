'use client'

import Image from 'next/image'
import ArrowButton from '../arrow-button'

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
          <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
            {header.toUpperCase()}
          </h4>
          <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
          <p className="mt-8 text-[1.5rem] text-muted-foreground">{content}</p>
          <div className="mt-6 flex w-2/3 items-center justify-between gap-5">
            <ArrowButton
              title="Projects"
              className="flex-1"
              arrowColor="#FFF"
            />
            <ArrowButton title="Contact" className="flex-1" arrowColor="#FFF" />
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full flex-1">
        <Image
          fill
          src={src}
          alt="Profile Image"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
