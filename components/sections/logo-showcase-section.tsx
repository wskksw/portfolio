'use client'

import { Logo } from '@/data/stack'
import LogoIcon from '@/components/icons/logo'
import FadeInWrapper from '@/components/fade-in-wrapper'

interface LogoShowcaseSectionProps {
  title: string
  logos: Logo[]
}

export default function LogoShowcaseSection({
  title,
  logos,
}: LogoShowcaseSectionProps) {
  return (
    <section className="">
      <FadeInWrapper>
        <h2 className="text-center text-7xl font-extrabold">{title}</h2>
      </FadeInWrapper>
      <div className="mt-32 flex flex-wrap justify-center gap-32">
        {logos.map((logo, index) => (
          <FadeInWrapper
            className="gap aspect-square min-w-28 max-w-28 flex-1"
            key={index}
            delay={index * 0.05}
          >
            <LogoIcon logo={logo} />
          </FadeInWrapper>
        ))}
      </div>
    </section>
  )
}
