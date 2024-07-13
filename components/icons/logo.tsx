import { Logo } from '@/data/stack'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'

interface LogoIconProps {
  logo: Logo
}

export default function LogoIcon({ logo }: LogoIconProps) {
  if (typeof logo === 'object' && 'techStackIcon' in logo) {
    return (
      <StackIcon
        name={logo.techStackIcon}
        className="h-full w-full grayscale transition-all duration-300 hover:grayscale-0"
      />
    )
  } else {
    return (
      <div className="relative aspect-square h-full w-full flex-1">
        <Image
          fill
          src={logo.src}
          alt={logo.title}
          className="bg-transparent object-contain object-center grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
    )
  }
}
