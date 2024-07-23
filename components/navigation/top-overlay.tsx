import { Grid3x3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { githubLink, linkedinLink } from '@/data/links'
import { cn } from '@/lib/utils'
import { useGrid } from '@/providers/use-grid'

interface TopOverlayProps {
  navOpen: boolean
}

export default function TopOverlay({ navOpen }: TopOverlayProps) {
  const { setGridOpen } = useGrid()

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-20 h-fit w-full bg-transparent">
      <div className="flex h-full w-full justify-between gap-5 px-[34px] pt-8">
        <h4 className="text-4xl font-extrabold leading-8">JR</h4>
        <div className="pointer-events-auto flex h-fit gap-8">
          <div
            className={cn(
              'bounce hidden lg:block',
              navOpen
                ? 'pointer-events-none'
                : 'pointer-events-auto cursor-pointer',
            )}
            onClick={() => setGridOpen((prev) => !prev)}
          >
            <Grid3x3 className="h-8 w-8" />
          </div>
          <Link
            className="relative aspect-square h-8 cursor-pointer"
            href={githubLink}
            target="_blank"
          >
            <Image
              fill
              src={'/images/logos/git-hub.png'}
              alt="GitHub Icon"
              className="object-cover object-center"
            />
          </Link>
          <Link
            className="relative aspect-square h-8 cursor-pointer"
            href={linkedinLink}
            target="_blank"
          >
            <Image
              fill
              src={'/images/logos/linked-in.png'}
              alt="LinkedIn Icon"
              className="object-cover object-center"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
