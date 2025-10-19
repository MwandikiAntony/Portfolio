import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Antony Mwandiki | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Antony Mwandiki — Full Stack Web Developer specializing in the MERN stack, Next.js, and scalable web applications. Explore my work and experience in building impactful digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600">Antony Mwandiki</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I’m a <span className="font-semibold">Full Stack Web Developer</span> with a background in 
          <span className="font-semibold"> Applied Physics and Computer Science</span>. I design and develop 
          robust, user-centered applications using modern technologies such as 
          <span className="font-semibold"> React, Next.js, Node.js, MongoDB,</span> and 
          <span className="font-semibold"> TypeScript</span>.
        </p>

        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-10">
          I’ve contributed to projects like <span className="font-semibold">Capital Bank of Kenya </span> 
          and  <span className="font-semibold"> Afya Diary Kenya</span>, focusing on digital transformation, 
          system performance, and intuitive user experiences.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
