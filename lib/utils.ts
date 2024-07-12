import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateBestSidebar = (y: number, refs: any, window: any) => {
  const clientTop = y
  const clientBottom = clientTop + window.innerHeight

  var largestIndex = -1
  var largestDistance = -Infinity

  refs.current.forEach((ref: any, index: number) => {
    const boundTop = ref.offsetTop
    const boundBottom = boundTop + ref.clientHeight

    const top = Math.max(boundTop, clientTop)
    const bottom = Math.min(boundBottom, clientBottom)

    if (bottom < top) return

    const distance = bottom - top

    if (distance > largestDistance) {
      largestDistance = distance
      largestIndex = index
    }
  })

  return largestIndex
}
