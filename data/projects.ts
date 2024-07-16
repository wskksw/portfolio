import { Logo, logoMap } from './stack'

export type BaseMedia = {
  src: string
  aspectRatio?: string
  className?: string
}

export interface Media extends BaseMedia {
  type: 'image' | 'video'
}

export interface Image extends BaseMedia {
  type: 'image'
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
  images: Image[]
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

export const selectedProjects: SelectedProject[] = [
  {
    year: '2024',
    title: 'Omica',
    description:
      'Omica is a comprehensive business management solution designed for large-scale distributors. It streamlines operations through an e-commerce platform, manages data efficiently, and offers robust filtering options.',
    images: [
      {
        type: 'image',
        src: '/images/omica/cart-mockup-lg-1.png',
      },
      {
        type: 'image',
        src: '/images/omica/inventory-light-mockup-lg-1.png',
      },
      {
        type: 'image',
        src: '/images/omica/view-products-mockup-lg-1.png',
      },
    ],
    field: 'Full Stack Development',
    actions: [
      {
        title: 'Project Details',
        link: '/projects/0',
      },
    ],
    sections: [
      {
        type: 'image-grid',
        title: 'Omica',
        media: [
          {
            type: 'image',
            src: '/images/omica/products-dark.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/cart-1.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/view-product-3.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'Omica is tailored to large-scale distributors with a comprehensive business management platform.  It simplifies operations through an integrated e-commerce solution, managing customer orders from payment to delivery.  The platform boasts flexible product management with variants, nested categories, dynamic attributes, and built-in discounting features. Additionally, Omica streamlines internal processes by handling employee payroll and generating insightful company analytics.<br/><br/>Note: The company and platform are both named Omica.',
          },
          {
            title: 'Client',
            description:
              "Omica, a sister company to PetPlus PH (the Philippines' largest pet supply distributor), leverages the platform for comprehensive business management. This includes showcasing their extensive product catalog, streamlining shipping and order management for a seamless customer experience, and facilitating employee payroll and company analytics.",
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Expansive Data Tables',
        media: [
          {
            type: 'image',
            src: '/images/omica/inventory-light.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/products-light.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/outgoing-dark.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Expansive Data Tables',
        content: [
          {
            title: 'Problem',
            description:
              'A core feature of this platform was to present and interact with data in a meaningful and seamless manner. With over 20 unique tables, each requiring filtering, sorting, viewing, expanding, and selecting capabilities, the data tables needed to be both maintainable and easily modifiable.',
          },
          {
            title: 'Solution',
            description:
              'The initial approach was to create a single abstract data table component for reuse, but this posed challenges. When an edge case broke this abstraction, the problem rippled throughout the platform. The solution was to develop smaller, modular components that could be attached to each data table as needed. Features like pagination, filtering, nesting, and more could be easily added to the base table component. All these functions operated server-side by sending requirements to robust backend APIs.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Testing',
        media: [
          { type: 'image', src: '/images/omica/test.png', aspectRatio: '16/9' },
        ],
      },
      {
        type: 'text',
        title: 'Testing',
        content: [
          {
            title: 'Problem',
            description:
              'With a platform of this scale, ensuring that new changes do not affect existing functionality is crucial. Given the complex relationships in the database, testing required more than just mocking functions.',
          },
          {
            title: 'Solution',
            description:
              'Robust testing was implemented using Jest and a replica of the database. Unit testing encompassed core functionality, edge cases, and error handling. Additionally, a comprehensive coverage report was utilized to assess the extent to which the tests covered the functions.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Dynamic Filtering',
        media: [
          {
            type: 'image',
            src: '/images/omica/view-products-1.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/view-products-2.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Dynamic Filtering',
        content: [
          {
            title: 'Problem',
            description:
              'All filtering data, such as categories, attributes, and pricing for products, were configured by the admins. This meant that the filters were not always limited to brand or color but needed to be dynamic based on the type of store. These filters had to support single and multi-option attributes, categories, sliders, and more. Additionally, each category needed to include filter data for its descendants.',
          },
          {
            title: 'Solution',
            description:
              "A [Breadth-First Search (BFS)](https://en.wikipedia.org/wiki/Breadth-first_search) identified all descendant categories for a selected category. This ensured a comprehensive view of relevant products. Next, the system gathered applicable filter data from the products within these categories. To balance user experience and SEO, the URL stored only the selected category ID for SEO while all other filter selections were stored in the user's local storage. This minimized URL length while preserving user selections during navigation.",
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Robust Modals & Forms',
        media: [
          {
            type: 'image',
            src: '/images/omica/modal-dark-1.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/fulfill-light.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/modal-dark-3.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'More',
        media: [
          {
            type: 'image',
            src: '/images/omica/store-analytics-light.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/omica/view-product-1.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Future Plans',
        content: [
          {
            title: 'Recommendation Systems',
            description:
              'To enhance user satisfaction and engagement, I plan on implementing a hybrid recommendation system utilizing both collaborative and content-based filtering techniques. This would leverage user behavior patterns and the vast product attribute data to deliver highly personalized recommendations, ultimately leading to increased click-through rates.',
          },
          {
            title: 'Specialized Chatbot',
            description:
              'My previous experience with RAG models can further expand on the recommendation system by creating a recommendation bot. It will leverage the existing system and the vast product data available to offer personalized suggestions, exceeding the efficiency of typical product searches.',
          },
        ],
      },
    ],
    logos: [
      logoMap.typescript,
      logoMap.postgresql,
      logoMap.prisma,
      logoMap.cloudinary,
      logoMap.nextjs,
      logoMap.vercel,
      logoMap.jest,
      logoMap.mochajs,
      logoMap.tailwindcss,
      logoMap.shadcn,
      logoMap.prettier,
      logoMap.figma,
    ],
  },
  {
    year: '2024',
    title: 'ChatEd',
    description:
      'ChatEd: AI Assitant. Uses modified RAG models to combine natural language processing and vector databases to leverage domain-specific knowledge. Integrates with UBC systems for seamless student and professor interaction.',
    images: [
      {
        type: 'image',
        src: '/images/chatEd/diagram.png',
        className: 'object-contain bg-background',
      },
      {
        type: 'image',
        src: '/images/chatEd/chat.png',
      },
      {
        type: 'image',
        src: '/images/chatEd/documents.png',
      },
    ],
    field: 'Full Stack & AI Development',
    actions: [
      {
        title: 'Research Paper',
        link: 'https://arxiv.org/pdf/2401.00052',
      },
      {
        title: 'Project Details',
        link: '/projects/1',
      },
    ],
    sections: [
      {
        type: 'image-grid',
        title: 'ChatEd',
        media: [
          {
            type: 'image',
            src: '/images/chatEd/chat.png',
            className: 'object-contain bg-background',
          },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'The recent success of tools like ChatGPT has highlighted the potential of AI for efficient information retrieval and summarization. However, a key challenge remains: how to leverage these tools effectively within specific domains.',
          },
          {
            title: 'Goals',
            description:
              'This project, developed for the [University of British Columbia](https://www.ubc.ca/), aimed to address the gap by exploring methods to tailor AI assistants to understand nuanced industry knowledge. In this case, the professor-student interaction regarding course content.',
          },
          {
            title: 'Learnings & Research Paper',
            description:
              "The breadth of cutting-edge technologies employed in this project was so significant that it warranted co-authoring a [research paper](https://arxiv.org/pdf/2401.00052) with one of the top computer science professor at UBC, [Ramon Lawrence](https://ctl.ok.ubc.ca/about-the-ctl/team-contact/ramon-lawrence/).  The research explored the interplay between natural language processing, vector databases, and LLM chains, pushing the boundaries of what's possible in this exciting field.<br/><br/>We published before Big Tech started releasing context-aware LLMs!",
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'RAG Model & Vector Databases',
        media: [
          {
            type: 'image',
            src: '/images/chatEd/code-1.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/chatEd/code-2.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'RAG Model & Vector Databases',
        content: [
          {
            title: 'Problem',
            description:
              'A crucial aspect of the project involved integrating domain-specific knowledge with ChatGPT.  However, this presented a significant challenge due to limitations in real-time model training and the sheer volume of data required to properly address student queries.',
          },
          {
            title: 'Solution',
            description:
              "To bridge the gap in domain knowledge, the project implemented a two-pronged approach. First, it utilized Natural Language Processing (NLP) to generate text embeddings from domain-specific sources such as university websites, lectures, and documents. These embeddings represent textual content as numerical vectors, facilitating efficient comparison.<br/><br/>Second, the project employed a Postgres database with a vector database extension, [PGVector](https://github.com/pgvector/pgvector). This allowed for rapid comparison between student queries and text embedding vectors, identifying the most relevant documents.  Afterward, it feeds the relevant documents along with the student's question to ChatGPT, effectively injecting domain knowledge into each student query.",
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Integration w/UBC',
        media: [
          {
            type: 'image',
            src: '/images/chatEd/middleware.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/chatEd/documents.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Integration w/UBC',
        content: [
          {
            title: 'Problem',
            description:
              'The project encountered challenges related to response time and scalability. As query complexity increased and the need for additional similarity searches arose, response times exceeded the average ChatGPT experience. Compounding the challenge, student queries were often redundant, and instructors lacked a user-friendly interface to manage the chatbot.',
          },
          {
            title: 'Solution',
            description:
              'A **middleware layer** intercepts student queries before reaching OpenAI. It rephrases queries into core concepts, turns them into text embeddings, and then compares them against existing questions using a vector similarity search. Pre-existing answers for rephrased queries are retrieved instantly and complex queries are directed to OpenAI, optimizing resource utilization. To ensure students have a complete understanding, all responses come with **links to the source material** used by the chatbot, fostering trust and transparency. An admin interface enables instructors to manage documents and curate chatbot responses, further enhancing responsiveness.',
          },
        ],
      },
      // {
      //   type: 'image-grid',
      //   title: 'Testing AI',
      //   media: [], // TODO
      // },
      {
        type: 'text',
        title: 'Testing AI',
        content: [
          {
            title: 'Problem',
            description:
              'Conventional testing approaches proved inadequate due to the inherent flexibility of the chatbot. The system could achieve correct student query responses, question rephrasing, and document processing in multiple ways, making traditional testing methods far less effective.',
          },
          {
            title: 'Solution',
            description:
              "To comprehensively assess the chatbot's performance and capture its subtleties, we prepared a diverse set of tools. This included:<br/><br/>\n - **Answer Similarity**: A cross-encoder-based metric presented by [Risch et al](https://arxiv.org/abs/2108.06130), evaluates the similarity between strings based on semantic similarity rather than simple string similarity.\n - **TF-IDF**: A more advanced string comparison using cosine-similarity used to measure the similarity of the query to the ground truth.\n - **Answer Correctness**: Responses are graded by prompting AI agent [llama3:70b instruct](https://ollama.com/library/llama3:70b-instruct).\n\n<br/> These tools were used to generate the following scores:<br/><br/> - **Answer Similarity and TF-IDF Mean**: Higher is better, indicating a closer match to the expected answers.\n - **Standard Deviation (Std Dev) Mean**: Lower is better, indicating more consistency and stability in the model's responses.\n - **Root Mean Squared Error (RMSE) Mean**: A metric aimed to penalizes larger errors in responses. Lower is better, indicating normal distribution.\n - **Inference Speed Mean**: Measures the average time taken by the model to generate a response. Lower is better, indicating faster performance. \n\n\n <br/> This multifaceted approach provides a nuanced picture of the chatbot's strengths and weaknesses, enabling continuous improvement to better support our students.",
          },
        ],
      },
      // {
      //   type: 'image-grid',
      //   title: 'Future Plans',
      //   media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      // },
      {
        type: 'text',
        title: 'Future Plans',
        content: [
          {
            title: 'User Testing',
            description:
              'While the current solution offers a promising foundation, its ultimate success hinges on user experience.  Since the chatbot is a recent launch, gathering comprehensive user testing data will require time across semesters. We plan to leverage this upcoming data to continuously optimize and refine the system, ensuring it effectively meets the needs of students and instructors.',
          },
          {
            title: 'Document Quality',
            description:
              'Acknowledging the "Garbage In, Garbage Out" principle, the project explores strategies to optimize document quality, a crucial factor in chatbot performance.  One approach involves developing an instructor interface that guides document creation, focusing on key student needs and potential questions.  Alternatively, processing techniques could be employed to pre-process documents, simulating student inquiries and extracting the most relevant information. ',
          },
        ],
      },
    ],
    logos: [
      logoMap.typescript,
      logoMap.postgresql,
      logoMap.typeorm,
      logoMap.pgvector,
      logoMap.nextjs,
      logoMap.nestjs,
      logoMap.docker,
      logoMap.openai,
      logoMap.langchain,
      logoMap.pinecone,
      logoMap.jest,
      logoMap.mochajs,
    ],
  },
  {
    year: '2024',
    title: 'Hub',
    description:
      'An educational course creation platform emphasizing mastery learning and student agency. Empowers instructors to design modular courses that make mastering 90% engaging.',
    images: [
      {
        type: 'image',
        src: '/images/portfolio/draft-1.png',
      },
      {
        type: 'image',
        src: '/images/portfolio/draft-1.png',
      },
      {
        type: 'image',
        src: '/images/portfolio/draft-1.png',
      },
    ],
    field: 'Full Stack Development',
    actions: [
      {
        title: 'Project Details',
        link: '/projects/2',
      },
    ],
    sections: [
      {
        type: 'image-grid',
        title: 'Hub',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'Current methods often overlook the root cause of student disengagement and difficulty understanding material. Students frequently enter classes lacking the foundational knowledge needed to grasp new concepts. Instead of passing students at 50-60%, this platform uses mastery learning to make it accessible and enjoyable to master a full **90%** before going forward.',
          },
          {
            title: 'Goals',
            description:
              'To empower instructors to design and share modular courses that emphasize 90% student mastery through the use of reusable and replayable learning units.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Progression System',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Progression System',
        content: [
          {
            title: 'Problem',
            description:
              'Traditional, linear learning models force students down a single path, offering limited choice in what they learn. This rigidity can be demotivating, especially for students who struggle with or dislike specific topics.  The consequence? A loop of frustration that further hinders overall learning motivation.',
          },
          {
            title: 'Solution',
            description:
              'This platform incorporates a game-inspired progression system. Modules are assigned points, which unlock new content within each course. This empowers students with choice. They can master modules they enjoy or find easier to earn points and unlock content to compensate for areas they find more challenging. This system fosters a sense of agency and achievement, as every last point in each module contributes to unlocking new learning opportunities. The last 50% is just as valuable as the first.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Quiz Modules',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Quiz Modules',
        content: [
          {
            title: 'Problem',
            description:
              'The quiz module needed to support a wide variety of question archetypes. Each archetype required a unique interface for student interaction and needed to handle diverse input types within the question itself. For instance, a fill-in-the-blank question could involve string entry, numbers, selection, or even drag-and-drop interactions. This complexity presented hurdles in the user interface design and the underlying data schema for storing quiz, question, and attempt data. Lastly, a quiz attempt needed to remain accurate to the quiz taken, regardless of whether the quiz has been updated or not.',
          },
          {
            title: 'Solution',
            description:
              'To address the unique interfaces required, I implemented a novel solution inspired by Notion. During question creation, each input or block is treated as plain text. Adding custom input types becomes intuitive through a simple slash command (‘/’), akin to using rich text formatting. Similarly, the deletion of a custom input was identical to deleting plain text. This approach required a sophisticated state management and reference system to create a hybrid text editor.<br/><br/>Furthermore, an automated version control system was implemented to ensure data integrity during quiz revisions. Any modifications to a quiz module trigger the creation of a duplicate copy. New attempts, from both students and instructors, are automatically directed to this updated version. This ensures that previously submitted student responses remain accurately linked to the specific quiz they were taken on.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Future Plans',
        media: [{ type: 'image', src: '/images/portfolio/draft-1-lg.png' }],
      },
      {
        type: 'text',
        title: 'Future Plans',
        content: [
          {
            title: 'AI-Driven Question Generation',
            description:
              'To bolster the replayability of individual modules, I plan on integrating an AI-driven question bank for the quiz modules. This system would leverage an AI model with access to course materials to generate a pool of potential questions. Creators could then efficiently curate the question bank by simply approving, rejecting, or modifying the suggestions. This solution significantly reduces the time and effort required to create course questions.',
          },
          {
            title: 'Chatbot Integration',
            description:
              "Leveraging my experience in RAG models and domain-specific knowledge integration, I plan on introducing a student-facing chatbot. This chatbot will have comprehensive access to all course modules and will serve as a personalized learning guide. By drawing on the platform's knowledge base and my experience with RAG models, the chatbot can offer students intelligent recommendations on their learning path, suggesting the most relevant modules based on their progress, strengths, and identified gaps.",
          },
        ],
      },
    ],
    logos: [
      logoMap.typescript,
      logoMap.postgresql,
      logoMap.prisma,
      logoMap.cloudinary,
      logoMap.nextjs,
      logoMap.vercel,
      logoMap.tailwindcss,
      logoMap.shadcn,
      logoMap.prettier,
      logoMap.figma,
    ],
  },
  {
    year: '2023',
    title: 'Capstone',
    description:
      'A gamified coding practice platform designed to enhance student learning through AI-generated coding problems and personalized feedback. It utilizes Large Language Models and focuses on fostering motivation through fun and interactive learning.',
    images: [
      {
        type: 'image',
        src: '/images/capstone/dashboard-mockup.png',
      },
      {
        type: 'image',
        src: '/images/capstone/ide-mockup.png',
      },
      {
        type: 'image',
        src: '/images/capstone/modules.png',
      },
    ],
    field: 'Full Stack & AI Development',
    actions: [
      {
        title: 'GitHub',
        link: 'https://github.com/UBCO-COSC-499-Summer-2023/project-6-gamified-coding-practice-platform-gamifygeeks',
      },
      {
        title: 'Project Details',
        link: '/projects/3',
      },
    ],
    sections: [
      {
        type: 'image-grid',
        title: 'Capstone',
        media: [
          {
            type: 'image',
            src: '/images/capstone/ide.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/capstone/modules.png',
            aspectRatio: '16/9',
          },
          { type: 'image', src: '/images/capstone/dashboard-mockup-lg.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'Traditional university lectures and assignments often fail to capture student attention, decreasing motivation and hindering learning. Students often continue their studies with an incomplete understanding of the previous material. Leveraging gamification and Large Language Models (LLMs), this platform addresses this by practicing mastery learning facilitated by limitless and personalized AI-generated coding problems in multiple languages and fields.',
          },
          {
            title: 'Client',
            description:
              "Our client, Parsa Rajabi, is currently pursuing a master's focused on Computer Science Education at Simon Fraser University. Parsa plans on using this platform to aid in teaching his future classes.",
          },
          {
            title: 'Final Report',
            description:
              'A comprehensive report detailing the project is available to download [here](/capstone.pdf).',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Selenium Testing & CI/CD',
        media: [
          {
            type: 'image',
            src: '/images/capstone/result.png',
            aspectRatio: '512/410',
            className: 'object-contain bg-primary',
          },
          {
            type: 'image',
            src: '/images/capstone/checks.png',
            aspectRatio: '512/410',
          },
          {
            type: 'image',
            src: '/images/capstone/tests.png',
            aspectRatio: '512/410',
          },
        ],
      },
      {
        type: 'text',
        title: 'Selenium Testing & CI/CD',
        content: [
          {
            title: 'Problem',
            description:
              'Front-end testing presents a distinct challenge compared to back-end testing. The goal is to simulate real-world user interactions while mimicking their limited access (no custom functions). This posed a significant hurdle as it required manual DOM manipulation.',
          },
          {
            title: 'Solution',
            description:
              'We implemented automated front-end testing using Selenium to simulate user interactions and validate platform functionality. Integration with GitHub Actions enabled parallel testing across multiple headless browsers, significantly accelerating the testing process.<br/><br/>Further streamlining the workflow, each test run automatically created a comprehensive report. Additionally, failing tests **automatically captured screenshots**, providing valuable visual context for developers to pinpoint errors efficiently.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Code Compiler',
        media: [
          {
            type: 'image',
            src: '/images/capstone/ide-3.png',
            aspectRatio: '712/591',
          },
          {
            type: 'image',
            src: '/images/capstone/ide-2.png',
            aspectRatio: '712/591',
          },
          {
            type: 'image',
            src: '/images/capstone/ide-1.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Code Compiler',
        content: [
          {
            title: 'Problem',
            description:
              'A critical feature of the platform is its ability to facilitate coding within the platform itself. The absence of comprehensive libraries made this an even bigger problem.',
          },
          {
            title: 'Solution',
            description:
              'The solution involved configuring an IDE library to provide an interface for the students. This then integrates into a backend API connected to OpenAI that would stream the answer directly to the front end in real time, enhancing the response time. This system functions as a dual-purpose tool, assessing student answers for accuracy and providing them with tailored feedback.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Help System',
        media: [
          {
            type: 'image',
            src: '/images/capstone/help-1.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/capstone/help-2.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/capstone/help-3.png',
            aspectRatio: '16/9',
          },
        ],
      },
      {
        type: 'text',
        title: 'Help System',
        content: [
          {
            title: 'Problem',
            description:
              "The platform's functionality relied on numerous components requiring clarification. However, overwhelming users with help popups and hover interactions for every element would create a cluttered and confusing experience.",
          },
          {
            title: 'Solution',
            description:
              "A dedicated 'Help' button on all pages grants students on-demand access to detailed descriptions and usage instructions. This hover-activated help mode allows users to explore the platform's functionality at their own pace without overwhelming popups.",
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Project Role & Soft-Skills',
        media: [
          { type: 'image', src: '/images/capstone/board.png' },
          { type: 'image', src: '/images/capstone/pr.png' },
        ],
      },
      {
        type: 'text',
        title: 'Project Role & Soft-Skills',
        content: [
          {
            title: 'My Role',
            description:
              'My role in the project was to lead the platform design, front-end development & testing, and integrating OpenAI question generation. A full list of my contributions can be found [here](https://github.com/UBCO-COSC-499-Summer-2023/project-6-gamified-coding-practice-platform-gamifygeeks/blob/master/docs/weekly%20logs/Ramos/Personal.md).',
          },
          {
            title: 'Difficulties',
            description:
              'Working with a team of five with vastly different backgrounds and experiences was difficult. Potential misunderstandings from diverse perspectives, conflicting individual goals, and mismatched skill sets lead to roadblocks and hindered team morale',
          },
          {
            title: 'Learnings',
            description:
              'Leading the design, I fostered a collaborative environment by integrating everyone’s ideas or addressing why I think we should approach it differently. This teamwork extended to the back-end team, where I honed my ability to communicate data requirements effectively and upfront. The project solidified the importance of strong team dynamics, a skillset as valuable as the code itself.',
          },
        ],
      },
    ],
    logos: [
      logoMap.js,
      logoMap.reactjs,
      logoMap.tailwindcss,
      logoMap.openai,
      logoMap.mysql,
      logoMap.docker,
      logoMap.figma,
      logoMap.jest,
      logoMap.mochajs,
      logoMap.seleneium,
      logoMap.postman,
      logoMap.git,
    ],
  },
]

export const miscProjects: Project[] = [
  {
    year: '2024',
    title: 'Portfolio',
    description:
      'This portfolio embraces a clean and sophisticated monochrome aesthetic. Smooth animations create a visually engaging and intuitive exploration of my work.',
    images: [
      {
        type: 'image',
        src: '/images/portfolio/draft-1.png',
      },
    ],
    field: 'Web Development & Design',
    sections: [
      {
        type: 'image-grid',
        title: 'Portfolio',
        media: [
          {
            type: 'image',
            src: '/images/portfolio/draft-1-lg.png',
          },
          {
            type: 'image',
            src: '/images/portfolio/draft-3.png',
          },
          { type: 'image', src: '/images/portfolio/draft-2.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
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
        media: [{ type: 'image', src: '/images/portfolio/moodboard.png' }],
      },
    ],
    logos: [
      logoMap.nextjs,
      logoMap.vercel,
      logoMap.framer,
      logoMap.figma,
      logoMap.typescript,
    ],
  },
  {
    year: '2024',
    title: 'Deep Rock',
    description:
      'Inspired by Deep Rock Galactic, this project builds a massive, dynamic world with 10,000+ agents using real-time terrain generation, efficient pathfinding, and natural enemy AI.',
    images: [
      {
        type: 'image',
        src: '/images/deepRock/main.png',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'Deep Rock',
        media: [{ type: 'image', src: '/images/deepRock/main.png' }],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
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
        media: [
          {
            type: 'image',
            src: '/images/deepRock/map-2.png',
            aspectRatio: '1/1',
          },
          {
            type: 'image',
            src: '/images/deepRock/map-1.png',
            aspectRatio: '1/1',
          },
          {
            type: 'image',
            src: '/images/deepRock/map-3.png',
            aspectRatio: '1/1',
          },
        ],
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
              '[OpenSimplex Noise](https://en.wikipedia.org/wiki/OpenSimplex_noise#:~:text=OpenSimplex%20noise%20is%20an%20n,artifacts%20characteristic%20of%20Perlin%20noise.) generated a 2D grid of values between 0-1. The [Marching Squares algorithm](https://en.wikipedia.org/wiki/Marching_squares) then uses these values to create boundaries based on whether 2 cells contain a threshold value. For example, 0.4 and 0.6 contain 0.5, then these would be marked. These boundaries are then used to add wall segments and terrain.',
          },
        ],
      },
      {
        type: 'image-grid',
        title: 'Flowfield Path Following & Steering Behaviors',
        media: [
          {
            type: 'image',
            src: '/images/deepRock/field-2.png',
            aspectRatio: '1/1',
          },
          {
            type: 'image',
            src: '/images/deepRock/field-3.png',
            aspectRatio: '1/1',
          },
          {
            type: 'image',
            src: '/images/deepRock/field-1.png',
            aspectRatio: '1/1',
          },
        ],
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
        media: [
          {
            type: 'image',
            src: '/images/deepRock/qTree.png',
            aspectRatio: '1/1',
          },
        ],
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
              'This is where [QuadTrees](https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions.), a spatial partitioning technique, came in. By dividing the environment into smaller zones (quadrants), we could efficiently query only the agents located within a certain range of each other. This significantly reduced the number of unnecessary checks and ensured efficient agent interaction as the number of agents grew. Greatly increased the number of projects, enemies, and players.',
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
      'Mesmerized by procedural wallpapers, I created high-def versions for myself and friends, exploring particle simulations and noise functions.',
    images: [
      {
        type: 'image',
        src: '/images/flowfields/pattern-mockup-1.png',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'Flow Fields',
        media: [
          { type: 'image', src: '/images/flowfields/pattern-3.png' },
          { type: 'image', src: '/images/flowfields/pattern-2.png' },
          { type: 'image', src: '/images/flowfields/pattern-mockup-1.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
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
    images: [
      {
        type: 'image',
        src: '/images/wfc/pattern-mockup-1.png',
      },
    ],
    field: 'Software Development',
    sections: [
      {
        type: 'image-grid',
        title: 'WFC',
        media: [
          { type: 'image', src: '/images/wfc/pattern-3.png' },
          { type: 'image', src: '/images/wfc/pattern-2.png' },
          { type: 'image', src: '/images/wfc/pattern-mockup-1.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'I found the resulting images of the [Wave Function Collapse algorithm](https://en.wikipedia.org/wiki/Wave_function_collapse) weird, it had a pattern… with no structure? Randomly generated patterns always amused me so I wanted to know how these are generated based solely on a set of rules formed by the sides of each piece. ',
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
    year: '2023',
    title: 'The Pivot',
    description:
      'Frustrated by error-prone simplex calculators, this project built a user-friendly tool that tackles complex linear programming problems, featuring dynamic tables that handle various data formats for a robust solution.',
    images: [
      {
        type: 'image',
        src: '/images/thePivot/sc-mock-lg-1.png',
      },
    ],
    field: 'Full Stack Development',
    sections: [
      {
        type: 'image-grid',
        title: 'The Pivot',
        media: [
          {
            type: 'image',
            src: '/images/thePivot/sc-3.png',
            aspectRatio: '16/9',
          },
          {
            type: 'image',
            src: '/images/thePivot/sc-2.png',
            aspectRatio: '16/9',
          },
          { type: 'image', src: '/images/thePivot/sc-mock-1.png' },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: [
          {
            title: 'Introduction',
            description:
              'While studying the [Simplex algorithm](https://optimization.cbe.cornell.edu/index.php?title=Simplex_algorithm#:~:text=Simplex%20algorithm%20(or%20Simplex%20method,and%20solved%20via%20Simplex%20algorithm.), I found the calculations error-prone and tedious. I wanted to improve upon the existing calculators found online as they were difficult to use or didn’t provide the complete picture.',
          },
          {
            title: 'Learnings',
            description:
              'Apart from gaining a deeper understanding of the Simplex algorithm for my class, I learned to work with dynamic tables and variable data formats. The tables can accept integers, floats, and even fractions as I learned to use wrapper classes to process different number formats before computations.',
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
    images: [
      {
        type: 'image',
        src: '/images/mech/preview.png',
      },
    ],
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
            title: 'Introduction',
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
