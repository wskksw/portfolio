'use client'

interface TextSectionProps {
  header: string
  title: string
  content: {
    title: string
    description: string
  }[]
  className?: string
}

export default function TextSection({
  header,
  title,
  content,
  className,
}: TextSectionProps) {
  return (
    <section className={className}>
      <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
        {header.toUpperCase()}
      </h4>
      <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
      <div className="mt-16 border-b border-border">
        {content.map((item, index) => (
          <div key={index} className="flex gap-5 border-t border-border py-8">
            <h4 className="flex-1 text-[1.5em] font-bold">{item.title}</h4>
            <p className="flex-1 text-[1.5em] text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
