import React from 'react'
import MarkdownToJSX from 'markdown-to-jsx'

type MarkdownProps = {
  content: string
}

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <MarkdownToJSX
      options={{
        overrides: {
          h1: {
            component: 'h1',
            props: {
              className: 'text-3xl font-extrabold',
            },
          },
          h2: {
            component: 'h2',
            props: {
              className: 'text-2xl font-bold',
            },
          },
          h3: {
            component: 'h3',
            props: {
              className: 'text-xl font-bold',
            },
          },
          h4: {
            component: 'h4',
            props: {
              className: 'text-lg font-bold',
            },
          },
          h5: {
            component: 'h5',
            props: {
              className: 'text-base font-bold',
            },
          },
          h6: {
            component: 'h6',
            props: {
              className: 'text-sm font-bold',
            },
          },
          p: {
            component: 'p',
            props: {
              className: 'text-base',
            },
          },
          a: {
            component: 'a',
            props: {
              className: 'text-primary font-semibold underline',
              target: '_blank',
            },
          },
          ul: {
            component: 'ul',
            props: {
              className: 'list-disc list-inside',
            },
          },
          ol: {
            component: 'ol',
            props: {
              className: 'list-decimal list-inside',
            },
          },
          li: {
            component: 'li',
            props: {
              className: 'text-base',
            },
          },
          strong: {
            component: 'strong',
            props: {
              className: 'font-semibold text-primary',
            },
          },
          blockquote: {
            component: 'blockquote',
            props: {
              className: 'border-l-4 border-gray-300 pl-4',
            },
          },
          code: {
            component: 'code',
            props: {
              className: 'bg-gray-100 p-1 rounded',
            },
          },
        },
      }}
    >
      {content}
    </MarkdownToJSX>
  )
}

export default Markdown
