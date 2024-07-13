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
          <motion.li
            key={index}
            className="flex items-center gap-4"
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.2,
                duration: 0.8,
                delay: index * 0.05,
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="h-1 w-1 bg-muted-foreground"></div>
            {value}
          </motion.li>
        ))}
      </ul>
    </>
  )
}
