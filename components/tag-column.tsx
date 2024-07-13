import { motion } from 'framer-motion'
import FadeInWrapper from './fade-in-wrapper'

export type Column = {
  title?: string
  values: string[]
}

interface TagColumnProps {
  column: Column
}

export default function TagColumn({ column }: TagColumnProps) {
  return (
    <>
      <FadeInWrapper>
        <div className="block text-[1.5rem] text-muted-foreground">
          {column.title || <br />}
        </div>
      </FadeInWrapper>
      <ul className="pl-4 text-[1.5rem] text-muted-foreground">
        {column.values.map((value, index) => (
          <FadeInWrapper key={index} className="flex items-center gap-4">
            <div className="h-1 w-1 bg-muted-foreground"></div>
            {value}
            <motion.div
              whileInView={{
                offset: ['end start', 'start end'],
              }}
            ></motion.div>
          </FadeInWrapper>
        ))}
      </ul>
    </>
  )
}
