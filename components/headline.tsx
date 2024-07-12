interface HeadlineProps {
  header: string
  title: string
  tags: string[]
}

export default function Headline({ header, title, tags }: HeadlineProps) {
  return (
    <div>
      <h4 className="text-lg font-normal tracking-[0.3em] text-muted-foreground">
        {header.toUpperCase()}
      </h4>
      <h2 className="mb-1 mt-2 text-[1.5em] font-extrabold leading-8">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-4 font-normal text-muted-foreground">
        {tags.map((tag, index) => (
          <>
            <p>{tag}</p>
            {index !== tags.length - 1 && (
              <div className="h-[4px] w-[4px] flex-shrink-0 bg-muted-foreground" />
            )}
          </>
        ))}
      </div>
    </div>
  )
}
