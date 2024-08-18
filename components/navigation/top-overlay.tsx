import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { githubLink, linkedinLink } from '@/data/links'
import { cn } from '@/lib/utils'
import { useTransition } from '@/providers/use-transition'

interface TopOverlayProps {
  navOpen: boolean
}

export default function TopOverlay({ navOpen }: TopOverlayProps) {
  const { transitionPage } = useTransition()
  const pathname = usePathname()

  const routes = [{ label: "Home", path: "/", isActive: pathname === "/" },
  { label: "Projects", path: "/projects", isActive: pathname === "/projects" },
  { label: "About", path: "/about", isActive: pathname === "/about" },
  { label: "Research", path: "/research", isActive: pathname === "/research" }]

  return (
    <div className="fixed left-0 top-0 z-20 pb-8 h-fit w-full bg-background">
      <div className="flex h-full w-full justify-between gap-5 px-[34px] pt-8">
        <h4
          className="text-4xl font-extrabold leading-8 cursor-pointer"
          onClick={() => transitionPage('/')}
        >
          JR
        </h4>
        {
          routes.map((path, index) => (
            <button
              key={index}
              className={cn(
                "text-4xl font-bold cursor-pointer",
                path.isActive && "text-red-500",
              )}
              onClick={() => transitionPage(path.path)}
            >
              {path.label}
            </button>
          ))
        }

        <div className="pointer-events-auto flex h-fit gap-8">
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