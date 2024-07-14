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
            title: 'Learnings',
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
    title: 'Cheap Rock',
    description:
      'Inspired by Deep Rock Galactic, this project builds a massive, dynamic world with 10,000+ agents using real-time terrain generation, efficient pathfinding, and natural enemy AI.',
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
    logos: [logoMap.js, logoMap.js, logoMap.js, logoMap.js, logoMap.js],
  },
  {
    year: '2022',
    title: 'Flow Fields',
    description:
      'Mesmerized by procedural wallpapers, I created high-def versions for myself and friends, exploring particle manipulation and noise functions.',
    images: ['/images/portfolio/draft-1.png'],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'Flow Fields',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Inspiration',
            description:
              'I kept getting excited over these mesmerizing wallpapers online and even more so when I found out they were procedurally generated! ',
          },
          {
            title: 'Goals',
            description:
              'I wanted to create usable HD wallpapers for me and my friends',
          },
          {
            title: 'Learnings',
            description:
              'I learned how to convert a simple noise function into a grid of closely related direction vectors, each of which would guide a series of randomly placed particles across the canvas. I learned how to create trails for these particles that together would create a pseudo-random masterpiece.',
          },
        ],
      },
    ],
    logos: [logoMap.js, logoMap.js, logoMap.js, logoMap.js, logoMap.js],
  },
  {
    year: '2022',
    title: 'WFC',
    description:
      'Fascinated by the seemingly unstructured patterns of Wave Function Collapse, this explores generating them using only rules based on individual tile connections, mimicking the logic behind solving a jigsaw puzzle.',
    images: ['/images/portfolio/draft-1.png'],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'WFC',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Inspiration',
            description:
              'I found the resulting images of the [Wave Function Collapse](https://en.wikipedia.org/wiki/Wave_function_collapse) algorithm weird, it had a pattern… with no structure? Randomly generated patterns always amused me so I wanted to know how these are generated based solely on a set of rules formed by the sides of each piece. ',
          },
          {
            title: 'Learnings',
            description:
              'Developing a project utilizing the Wave Function Collapse algorithm solidified my understanding of sorting. Repeatedly sorting cells to identify the optimal candidate for "collapse" cemented this fundamental concept. Additionally, I gained valuable experience in composing well-structured classes, promoting code maintainability and modularity.',
          },
        ],
      },
    ],
    logos: [
      logoMap.java,
      logoMap.java,
      logoMap.java,
      logoMap.java,
      logoMap.java,
    ],
  },
  {
    images: ['/images/mech/preview.png'],
    year: '2023',
    title: 'Mech',
    description:
      'Inspired by Iron Man, this high-poly mech suit, sculpted in Blender, is a testament to my passion for 3D modeling.',
    field: '3D Modeling & Design',
    logos: [
      logoMap.blender,
      logoMap.figma,
      logoMap.blender,
      logoMap.figma,
      logoMap.blender,
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
