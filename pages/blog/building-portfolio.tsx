import Head from 'next/head';

const Post = () => (
  <>
    <Head>
      <title>How I Built My Portfolio</title>
      <meta name="description" content="A walkthrough of building my developer portfolio." />
    </Head>
    <article className="prose dark:prose-invert max-w-none">
      <h1>How I Built My Portfolio</h1>
      <p>Published: 2025-10-01</p>
      <p>
        This portfolio was built using Next.js, TypeScript, Tailwind CSS, and Vercel...
      </p>
      {/* Continue writing */}
    </article>
  </>
);

export default Post;
