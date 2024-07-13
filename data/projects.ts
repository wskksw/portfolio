import { Logo } from './stack'

type ImageGridSection = {
  title: string
  type: 'image-grid'
  srcs: string[]
}

type TextSection = {
  title: string
  type: 'text'
  content: {
    title: string
    description: string
  }[]
}

type SelectedProject = {
  year: string
  title: string
  description: string
  srcs: string[]
  leftColumnTags: {
    title: string
    values: string[]
  }
  rightColumnTags: {
    title: string
    values: string[]
  }
  actions: {
    title: string
    link: string
  }[]
  field: string
  sections: (TextSection | ImageGridSection)[]
}

export const selectedProjects: SelectedProject[] = [
  {
    year: '2019',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
    srcs: [
      '/images/sample1.avif',
      '/images/sample2.avif',
      '/images/sample3.avif',
    ],
    leftColumnTags: {
      title: 'Front-End',
      values: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    rightColumnTags: {
      title: 'Back-End',
      values: ['Node.js', 'Express', 'MongoDB'],
    },
    actions: [
      {
        title: 'GitHub',
        link: '',
      },
      {
        title: 'Visit Demo',
        link: '',
      },
      {
        title: 'Project Details',
        link: '',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: ['/images/sample1.avif'],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
    ],
  },
  {
    year: '2019',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
    srcs: [
      '/images/sample1.avif',
      '/images/sample2.avif',
      '/images/sample3.avif',
    ],
    leftColumnTags: {
      title: 'Front-End',
      values: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    rightColumnTags: {
      title: 'Back-End',
      values: ['Node.js', 'Express', 'MongoDB'],
    },
    actions: [
      {
        title: 'GitHub',
        link: '',
      },
      {
        title: 'Visit Demo',
        link: '',
      },
      {
        title: 'Project Details',
        link: '',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: ['/images/sample1.avif'],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
    ],
  },
  {
    year: '2019',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
    srcs: [
      '/images/sample1.avif',
      '/images/sample2.avif',
      '/images/sample3.avif',
    ],
    leftColumnTags: {
      title: 'Front-End',
      values: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    rightColumnTags: {
      title: 'Back-End',
      values: ['Node.js', 'Express', 'MongoDB'],
    },
    actions: [
      {
        title: 'GitHub',
        link: '',
      },
      {
        title: 'Visit Demo',
        link: '',
      },
      {
        title: 'Project Details',
        link: '',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: ['/images/sample1.avif'],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
    ],
  },
  {
    year: '2019',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
    srcs: [
      '/images/sample1.avif',
      '/images/sample2.avif',
      '/images/sample3.avif',
    ],
    leftColumnTags: {
      title: 'Front-End',
      values: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    rightColumnTags: {
      title: 'Back-End',
      values: ['Node.js', 'Express', 'MongoDB'],
    },
    actions: [
      {
        title: 'GitHub',
        link: '',
      },
      {
        title: 'Visit Demo',
        link: '',
      },
      {
        title: 'Project Details',
        link: '',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: ['/images/sample1.avif'],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
      {
        title: 'Overview',
        type: 'text',
        content: [
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
          {
            title: 'Project & Client Background',
            description:
              'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
          },
        ],
      },
      {
        title: 'Overview',
        type: 'image-grid',
        srcs: [
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ],
      },
    ],
  },
]
export const miscProjects = [
  {
    src: '/images/sample4.avif',
    year: '2020',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
    onClick: () => {},
    field: 'Software Development',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
  {
    src: '/images/sample4.avif',
    year: '2020',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
    onClick: () => {},
    field: 'Software Engineering',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
  {
    src: '/images/sample4.avif',
    year: '2020',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
    onClick: () => {},
    field: 'Software Development',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
  {
    src: '/images/sample4.avif',
    year: '2020',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
    onClick: () => {},
    field: 'Software Development',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
  {
    src: '/images/sample4.avif',
    year: '2020',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
    onClick: () => {},
    field: 'Software Engineering',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
]
