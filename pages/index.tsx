import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Antony Mwandiki | Full Stack Developer</title>
        <meta name="description" content="Full stack web developer portfolio using Next.js + Tailwind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Antony Mwandiki</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          A full stack developer building scalable, modern web apps.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
    </>
  );
};

export default Home;
