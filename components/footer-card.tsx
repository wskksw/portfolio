'use client'

import Image from 'next/image'
import Link from 'next/link'

interface FooterCardProps {
  title: string
  href: string
  imageSrc: string
}

export default function FooterCard({ title, href, imageSrc }: FooterCardProps) {
  return (
    <Link href={href} draggable={false}>
      <div className="unselectable">
        <p className="text-background">{title}</p>
        <div className="relative h-[240px] w-[360px] overflow-hidden">
          <div
            className="track-card relative h-[240px] w-[720px]"
            style={{
              transform: `translate(-25%, 0%)`,
            }}
          >
            <Image
              fill
              src={imageSrc}
              alt="navigation-image"
              className="object-cover object-center"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
