import { Logo } from './stack'

export type Media = {
  type: 'image' | 'video'
  src: string
}

type MediaGridSection = {
  title: string
  type: 'image-grid'
  media: Media[]
}

type TextSection = {
  title: string
  type: 'text'
  content: {
    title: string
    description: string
  }[]
}

export type Project = {
  year: string
  title: string
  description: string
  images: string[]
  field: string
  sections: (TextSection | MediaGridSection)[]
  logos: Logo[]
}

export interface SelectedProject extends Project {
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
}

export const selectedProjects: SelectedProject[] = [
  {
    year: '2019',
    title: 'Omica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo.',
    images: [
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
        media: [
          {
            type: 'image',
            src: '/images/sample1.avif',
          },
          {
            type: 'image',
            src: '/images/sample2.avif',
          },
          {
            type: 'image',
            src: '/images/sample3.avif',
          },
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
        media: [
          {
            type: 'image',
            src: '/images/sample1.avif',
          },
          {
            type: 'image',
            src: '/images/sample2.avif',
          },
          {
            type: 'image',
            src: '/images/sample3.avif',
          },
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
        media: [
          {
            type: 'image',
            src: '/images/sample1.avif',
          },
          {
            type: 'image',
            src: '/images/sample2.avif',
          },
          {
            type: 'image',
            src: '/images/sample3.avif',
          },
        ],
      },
    ],
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
  },
]

export const miscProjects: Project[] = [
  {
    images: ['/mech/preview.png'],
    year: '2020',
    title: 'Mech',
    description:
      'Inspired by Iron Man, this high-poly mech suit, sculpted in Blender, is a testament to my passion for 3D modeling.',
    field: 'Software Development',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      { techStackIcon: 'typescript' },
    ],
    sections: [
      {
        type: 'image-grid',
        title: 'Mech',
        media: [{ type: 'video', src: '/mech/orbit.mp4' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Inspiration',
            description:
              'A lifelong fascination with mech suits, fueled by a healthy dose of Iron Man fandom, led me to push my 3D modeling skills beyond the realm of low-poly projects. This high-detail mech design represents my desire to create increasingly complex and visually stunning models.',
          },
          {
            title: 'Learned Skills',
            description:
              'This project proved to be a turning point in my sculpting journey. It significantly deepened my understanding of anatomy and form, allowing me to achieve a level of detail and proportion far exceeding my previous work. The improved brush techniques I honed during this process are now a valuable asset in my sculpting toolbox.',
          },
          {
            title: 'Future Plans',
            description:
              "While the raw sculpt is a strong foundation, I'm eager to dive deeper into texturing and hard surface modeling to truly refine it. The future holds plans to bring this mech to life with animation and a captivating scene – stay tuned!",
          },
        ],
      },
    ],
  },
]
