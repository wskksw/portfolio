export type LogoImage = {
  title: string
  src: string
}

export type TechStackIconId = {
  techStackIcon: string
}

export type Logo = LogoImage | TechStackIconId

export const logoMap = {
  typescript: { techStackIcon: 'typescript' },
  postgresql: { techStackIcon: 'postgresql' },
  mysql: { techStackIcon: 'mysql' },
  prisma: { techStackIcon: 'prisma' },
  supabase: { techStackIcon: 'supabase' },
  mongodb: { techStackIcon: 'mongodb' },
  typeorm: {
    title: 'TypeORM',
    src: '/images/logos/typeorm.png',
  },
  firebase: { techStackIcon: 'firebase' },
  docker: { techStackIcon: 'docker' },
  nestjs: { techStackIcon: 'nestjs' },
  cloudinary: { techStackIcon: 'cloudinary' },
  cloudflare: { techStackIcon: 'cloudflare' },
  threejs: { techStackIcon: 'threejs' },
  apache: { techStackIcon: 'apache' },
  html5: { techStackIcon: 'html5' },
  css3: { techStackIcon: 'css3' },
  js: { techStackIcon: 'js' },
  vercel: {
    title: 'Vercel',
    src: '/images/logos/vercel.svg',
  },
  nextjs: { techStackIcon: 'nextjs2' },
  reactjs: { techStackIcon: 'reactjs' },
  android: { techStackIcon: 'android' },
  tailwindcss: { techStackIcon: 'tailwindcss' },
  antd: { techStackIcon: 'antd' },
  shadcn: {
    title: 'ShadCN',
    src: '/images/logos/shadcn.png',
  },
  prettier: { techStackIcon: 'prettier' },
  sass: { techStackIcon: 'sass' },
  jquery: { techStackIcon: 'jquery' },
  php: { techStackIcon: 'php' },
  openai: { techStackIcon: 'openai' },
  copilotgithub: { techStackIcon: 'copilotgithub' },
  langchain: {
    title: 'LangChain',
    src: '/images/logos/langchain.png',
  },
  pinecone: {
    title: 'Pinecone',
    src: '/images/logos/pinecone.png',
  },
  pgvector: {
    title: 'PGVector',
    src: '/images/logos/pgvector.png',
  },
  weaviate: {
    title: 'Weaviate',
    src: '/images/logos/weaviate.png',
  },
  nvidia: {
    title: 'NVIDIA',
    src: '/images/logos/nvidia.png',
  },
  figma: { techStackIcon: 'figma' },
  framer: {
    title: 'Framer',
    src: '/images/logos/framer.png',
  },
  blender: {
    title: 'Blender',
    src: '/images/logos/blender.png',
  },
  adobe: { techStackIcon: 'adobe' },
  ps: { techStackIcon: 'ps' },
  premierepro: {
    title: 'Premiere Pro',
    src: '/images/logos/premiere.png',
  },
  jest: { techStackIcon: 'jest' },
  mochajs: { techStackIcon: 'mochajs' },
  cypress: {
    title: 'Cypress',
    src: '/images/logos/cypress.png',
  },
  seleneium: {
    title: 'Selenium',
    src: '/images/logos/selenium.png',
  },
  postman: { techStackIcon: 'postman' },
  insomnia: {
    title: 'Insomnia',
    src: '/images/logos/insomnia.png',
  },
  aws: { techStackIcon: 'aws' },
  azure: { techStackIcon: 'azure' },
  'c++': { techStackIcon: 'c++' },
  git: { techStackIcon: 'git' },
  github: { techStackIcon: 'github' },
  java: { techStackIcon: 'java' },
  python: { techStackIcon: 'python' },
}

export const stackData = [
  {
    title: 'Backend',
    logos: [
      logoMap.typescript,
      logoMap.postgresql,
      logoMap.mysql,
      logoMap.prisma,
      logoMap.supabase,
      logoMap.mongodb,
      logoMap.typeorm,
      logoMap.firebase,
      logoMap.docker,
      logoMap.nestjs,
      logoMap.cloudinary,
      logoMap.cloudflare,
      logoMap.threejs,
      logoMap.apache,
    ],
  },
  {
    title: 'Frontend',
    logos: [
      logoMap.html5,
      logoMap.css3,
      logoMap.js,
      logoMap.vercel,
      logoMap.nextjs,
      logoMap.reactjs,
      logoMap.android,
      logoMap.tailwindcss,
      logoMap.antd,
      logoMap.shadcn,
      logoMap.prettier,
      logoMap.sass,
      logoMap.jquery,
      logoMap.php,
    ],
  },
  {
    title: 'AI & Machine Learning',
    logos: [
      logoMap.openai,
      logoMap.copilotgithub,
      logoMap.langchain,
      logoMap.pinecone,
      logoMap.pgvector,
      logoMap.weaviate,
      logoMap.nvidia,
    ],
  },
  {
    title: 'Design',
    logos: [
      logoMap.figma,
      logoMap.framer,
      logoMap.blender,
      logoMap.adobe,
      logoMap.ps,
      logoMap.premierepro,
    ],
  },
  {
    title: 'Testing',
    logos: [
      logoMap.jest,
      logoMap.mochajs,
      logoMap.cypress,
      logoMap.seleneium,
      logoMap.postman,
      logoMap.insomnia,
    ],
  },
  {
    title: 'Others',
    logos: [
      logoMap.aws,
      logoMap.azure,
      logoMap['c++'],
      logoMap.git,
      logoMap.github,
      logoMap.java,
      logoMap.python,
    ],
  },
]
