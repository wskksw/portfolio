interface LongArrowProps {
  size?: number
  color?: string
  className?: string
}

export default function LongArrow({ size, color, className }: LongArrowProps) {
  return (
    <svg
      width={size ? size * 4 : 64}
      height={size || 16}
      viewBox={size ? `0 0 ${size * 4} ${size}` : '0 0 64 16'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 16L54.575 14.6L60.175 9H0V7H60.175L54.575 1.4L56 0L64 8L56 16Z"
        fill={color || '#000'}
      />
    </svg>
  )
}
