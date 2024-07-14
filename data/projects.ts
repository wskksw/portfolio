import { Logo, logoMap } from './stack'

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
  actions: {
    title: string
    link: string
  }[]
}

export const selectedProjects: SelectedProject[] = []

export const miscProjects: Project[] = [
  {
    year: '2024',
    title: 'Portfolio',
    description:
      'This portfolio embraces a clean and sophisticated monochrome aesthetic. Smooth animations create a visually engaging and intuitive exploration of my work.',
    images: ['/images/portfolio/draft-1.png'],
    field: 'Web Development & Design',
    sections: [
      {
        type: 'image-grid',
        title: 'Portfolio',
        media: [
          { type: 'image', src: '/images/portfolio/draft-1-lg.png' },
          { type: 'image', src: '/images/portfolio/draft-1-lg.png' },
          { type: 'image', src: '/images/portfolio/draft-1-lg.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Inspiration',
            description:
              'Fresh out of university, I was eager to showcase my diverse portfolio of projects.  I wanted to establish trust by creating an avenue for potential clients, collaborators, and employers to discover my work easily',
          },
          {
            title: 'Difficulties',
            description:
              'Coordinating multiple animations on the same components initially presented some hurdles. Page transitions in Next.js 14 added another layer of complexity, as I needed a deeper understanding of component lifecycles to defer unmounting while exit animations played.',
          },
          {
            title: 'Learning Points',
            description:
              'Through this project, I honed my skills in manipulating the component lifecycle, ensuring smooth transitions between animations across the entire DOM. I also delved into best practices for animation optimization, resulting in a performant and visually captivating user experience.',
          },
          {
            title: 'Easter Eggs',
            description:
              'Keep an eye out for playful text hints scattered alongthe site, offering additional details or suggesting interactions. You might even discover a secret grid view with a unique way to experience the page. **Can you unlock it?**',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Moodboard',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
    ],
    logos: [
      logoMap.vercel,
      logoMap.framer,
      logoMap.shadcn,
      logoMap.figma,
      logoMap.tailwindcss,
      logoMap.typescript,
    ],
  },
  {
    year: '2023',
    title: 'Deep Rock',
    description:
      'This portfolio embraces a clean and sophisticated monochrome aesthetic. Smooth animations create a visually engaging and intuitive exploration of my work.',
    images: ['/images/portfolio/draft-1.png'],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'Deep Rock',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Inspiration',
            description:
              'Inspired by [DeepRock Galactic Survivor](https://store.steampowered.com/app/2321470/Deep_Rock_Galactic_Survivor/), I found the terrain and sheer number of things on the screen fascinating. I wanted to challenge myself by making something similar using some unique algorithms I’ve been eager to use.',
          },
          {
            title: 'Goals',
            description:
              'I wanted to tackle new and **more advanced algorithms** that I had recently read about (more on this below) and wanted all of them to work together seamlessly. I wanted at least **10,000 meaningful agents** on the screen and wanted all of it to run at more than **120 FPS**.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Marching Squares & OpenSimplex Noise',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Marching Squares & OpenSimplex Noise',
        content: [
          {
            title: 'Problem',
            description:
              'Maps needed to be both dynamic – offering a fresh experience with each playthrough – and detailed – featuring destructible terrain and precise collision detection. All of which needed to be computed in real-time and accessible by other core components.',
          },
          {
            title: 'Solution',
            description:
              '[OpenSimplex Noise](https://en.wikipedia.org/wiki/OpenSimplex_noise#:~:text=OpenSimplex%20noise%20is%20an%20n,artifacts%20characteristic%20of%20Perlin%20noise.) generated a 2D grid of values between 0-1. The [Marching Squares](https://en.wikipedia.org/wiki/Marching_squares) algorithm then uses these values to create boundaries based on whether 2 cells contain a threshold value. For example, 0.4 and 0.6 contain 0.5, then these would be marked. These boundaries are then used to add wall segments and terrain.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Flowfield Path Following & Steering Behaviors',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Flowfield Path Following & Steering Behaviors',
        content: [
          {
            title: 'Problem',
            description:
              'Enemies needed a way to perceive the environment and locate the player efficiently. Staying away from each other, going to the player, looking ahead, and avoiding obstacles were a few of the factors that the enemies needed to consider.',
          },
          {
            title: 'Solution',
            description:
              'This project utilizes a unique algorithm inspired by Breadth-First Search (BFS). This modified BFS efficiently calculates the best direction for enemies to move smoothly toward the player.  Additionally, the nodes consider incoming directions to dampen jarring turns and collisions. The generated flow field was used in conjunction with steering behaviors such as separation, alignment, and cohesion to create natural moving patterns for the enemies.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'QuadTree Optimizations',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'QuadTree Optimizations',
        content: [
          {
            title: 'Problem',
            description:
              'Many of the previous solutions involve multiple agents interacting in a dynamic environment. However, a naive approach where each agent checks every other agent for interaction leads to the ominous O(n^2) time complexity, impacting performance as the number of agents increases. ',
          },
          {
            title: 'Solution',
            description:
              'This is where [QuadTrees](https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions.), a spatial partitioning technique, came in. By dividing the environment into smaller zones (quadrants), we could efficiently query only the agents located within a certain range of each other. This significantly reduced the number of unnecessary checks and ensured efficient agent interaction as the number of agents grew.',
          },
        ],
      },
    ],
    logos: [
      logoMap.vercel,
      logoMap.framer,
      logoMap.shadcn,
      logoMap.figma,
      logoMap.tailwindcss,
      logoMap.typescript,
    ],
  },
  {
    images: ['/images/mech/preview.png'],
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
        media: [{ type: 'video', src: '/images/mech/orbit.mp4' }],
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
            title: 'Difficulties',
            description:
              'Capturing accurate human anatomy, especially proportions, proved a hurdle at first. Additionally, mastering the nuances of a diverse brush set to achieve the desired textures presented another layer of difficulty.',
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
