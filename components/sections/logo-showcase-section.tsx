'use client'

import Image from 'next/image'
import { Logo } from '@/data/stack'
import StackIcon from 'tech-stack-icons'
import LogoIcon from '../icons/logo'

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
      <h2 className="text-center text-7xl font-extrabold">{title}</h2>
      <div className="mt-32 flex flex-wrap justify-center gap-32">
        {logos.map((logo, index) => (
          <span
            className="gap aspect-square min-w-28 max-w-28 flex-1"
            key={index}
          >
            <LogoIcon logo={logo} />
          </span>
        ))}
      </div>
    </section>
  )
}
