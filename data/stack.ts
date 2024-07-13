export type LogoImage = {
  title: string
  src: string
}

export type TechStackIconId = {
  techStackIcon: string
}

export type Logo = LogoImage | TechStackIconId

export const stackData = [
  {
    title: 'Backend',
    logos: [
      { techStackIcon: 'typescript' },
      { techStackIcon: 'postgresql' },
      { techStackIcon: 'mysql' },
      { techStackIcon: 'prisma' },
      { techStackIcon: 'supabase' },
      { techStackIcon: 'mongodb' },
      {
        title: 'TypeORM',
        src: '/logos/typeorm.png',
      },
      { techStackIcon: 'firebase' },
      { techStackIcon: 'docker' },
      { techStackIcon: 'nestjs' },
      { techStackIcon: 'cloudinary' },
      { techStackIcon: 'cloudflare' },
      { techStackIcon: 'threejs' },
      { techStackIcon: 'apache' },
    ],
  },
  {
    title: 'Frontend',
    logos: [
      { techStackIcon: 'html5' },
      { techStackIcon: 'css3' },
      { techStackIcon: 'js' },
      {
        title: 'Vercel',
        src: '/logos/vercel.svg',
      },
      { techStackIcon: 'nextjs2' },
      { techStackIcon: 'reactjs' },
      { techStackIcon: 'android' },
      { techStackIcon: 'tailwindcss' },
      { techStackIcon: 'antd' },
      { techStackIcon: 'bootstrap4' },
      { techStackIcon: 'prettier' },
      { techStackIcon: 'sass' },
      { techStackIcon: 'jquery' },
      { techStackIcon: 'php' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    logos: [
      { techStackIcon: 'openai' },
      { techStackIcon: 'copilotgithub' },
      {
        title: 'LangChain',
        src: '/logos/langchain.png',
      },
      {
        title: 'Pinecone',
        src: '/logos/pinecone.png',
      },
      {
        title: 'PGVector',
        src: '/logos/pgvector.png',
      },
      {
        title: 'Weaviate',
        src: '/logos/weaviate.png',
      },
      {
        title: 'NVIDIA',
        src: '/logos/nvidia.png',
      },
    ],
  },
  {
    title: 'Design',
    logos: [
      { techStackIcon: 'figma' },
      {
        title: 'Framer',
        src: '/logos/framer.png',
      },
      {
        title: 'Blender',
        src: '/logos/blender.png',
      },
      { techStackIcon: 'adobe' },
      { techStackIcon: 'ps' },
      {
        title: 'Premiere Pro',
        src: '/logos/premiere.png',
      },
    ],
  },
  {
    title: 'Testing',
    logos: [
      { techStackIcon: 'jest' },
      { techStackIcon: 'mochajs' },
      {
        title: 'Cypress',
        src: '/logos/cypress.png',
      },
      {
        title: 'Selenium',
        src: '/logos/selenium.png',
      },
      { techStackIcon: 'postman' },
      {
        title: 'Insomnia',
        src: '/logos/insomnia.png',
      },
    ],
  },
  {
    title: 'Others',
    logos: [
      { techStackIcon: 'aws' },
      { techStackIcon: 'azure' },
      { techStackIcon: 'c++' },
      { techStackIcon: 'git' },
      { techStackIcon: 'github' },
      { techStackIcon: 'java' },
      { techStackIcon: 'python' },
    ],
  },
]
