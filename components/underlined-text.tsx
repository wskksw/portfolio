'use client'

import { cn } from '@/lib/utils'

interface UnderlinedTextProps {
  text: string
  className?: string
}

export default function UnderlinedText({
  text,
  className,
}: UnderlinedTextProps) {
  return (
    <p
      className={cn(
        "relative mt-4 inline-block cursor-pointer text-center text-9xl font-extrabold duration-500 before:absolute before:-bottom-5 before:left-0 before:h-5 before:w-0 before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100",
        className,
      )}
    >
      {text}
    </p>
  )
}
