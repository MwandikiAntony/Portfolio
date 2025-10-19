import Head from 'next/head';

const Post = () => (
  <>
    <Head>
      <title>How I Built My Portfolio | Antony Mwandiki</title>
      <meta
        name="description"
        content="A technical walkthrough of how I designed, developed, and deployed my personal portfolio using Next.js, TypeScript, and Tailwind CSS."
      />
    </Head>

    <article className="prose dark:prose-invert max-w-none">
      <h1>How I Built My Portfolio</h1>
      <p><strong>Published:</strong> 2025-10-01</p>

      <p>
        Building my personal portfolio was both a design and engineering exercise — a chance to
        demonstrate my technical expertise while creating a platform that represents who I am as a
        full stack developer. In this post, I’ll walk you through how I built it using
        <strong> Next.js, TypeScript, Tailwind CSS,</strong> and deployed it on <strong>Vercel</strong>.
      </p>

      <h2>Planning and Goals</h2>
      <p>
        Before writing any code, I defined the purpose of my portfolio: to showcase my skills,
        projects, and technical blog in a clean, professional, and fast-loading interface.
        Performance, scalability, and SEO were top priorities.
      </p>

      <h2>Choosing the Stack</h2>
      <ul>
        <li>
          <strong>Next.js</strong> — for its hybrid rendering, excellent SEO, and smooth routing system.
        </li>
        <li>
          <strong>TypeScript</strong> — to ensure type safety and maintainability across components.
        </li>
        <li>
          <strong>Tailwind CSS</strong> — for fast, responsive UI design and consistent styling.
        </li>
        <li>
          <strong>Vercel</strong> — for simple CI/CD, instant deployment, and edge optimization.
        </li>
      </ul>

      <h2>Design and Layout</h2>
      <p>
        I aimed for a minimalist design with clear typography, strong hierarchy, and plenty of white
        space. Each section — About, Projects, Blog, and Contact — was built as a standalone
        component for reusability. Tailwind’s utility-first approach helped me rapidly prototype and
        refine the design.
      </p>

      <h2>Core Features</h2>
      <ul>
        <li>Dynamic pages for projects and blog posts using file-based routing in Next.js.</li>
        <li>Responsive layout optimized for all screen sizes.</li>
        <li>Dark mode support using Tailwind’s <code>dark:</code> variants.</li>
        <li>SEO-friendly meta tags and dynamic page titles via <code>next/head</code>.</li>
        <li>Modular component structure for maintainability.</li>
      </ul>

      <h2>Deployment</h2>
      <p>
        Once the application was ready, I deployed it on Vercel — a seamless process that connected
        directly with my GitHub repository. Each commit triggers an automatic build and deployment,
        ensuring continuous integration.
      </p>

      <h2>Takeaways</h2>
      <p>
        This project reinforced my love for building clean, performant web experiences. It also
        reminded me that great design isn’t just about visuals — it’s about structure, accessibility,
        and usability. My portfolio now serves as a living representation of my skills and growth as
        a developer.
      </p>

      <h2>Tech Stack Summary</h2>
      <ul>
        <li><strong>Frontend:</strong> Next.js, TypeScript, Tailwind CSS</li>
        <li><strong>Deployment:</strong> Vercel</li>
        <li><strong>Tools:</strong> Git, VS Code, Figma</li>
      </ul>

      <p>
        You can view the full source code on{" "}
        <a
          href="https://github.com/yourusername/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , or visit the live site at{" "}
        <a
          href="https://antonymwandiki.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          antonymwandiki.vercel.app
        </a>.
      </p>
    </article>
  </>
);

export default Post;
