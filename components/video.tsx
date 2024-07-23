import { cn } from '@/lib/utils'

interface VideoProps {
  src: string
  className?: string
}

export default function Video({ src, className }: VideoProps) {
  return (
    <video
      width="100%"
      height="100%"
      className={cn('object-cover object-center', className)}
      autoPlay
      loop
      muted
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
