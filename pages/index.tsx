import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Antony Mwandiki | Full Stack Software Developer</title>
        <meta
          name="description"
          content="Antony Mwandiki — Full Stack Software Developer specializing in web and mobile applications. Experienced with React, Next.js, Node.js, MongoDB, TypeScript, and Dart/Flutter for building scalable, user-centered digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-24 px-6">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-600">Antony Mwandiki</span> — Full Stack Software Developer
        </h1>

        {/* About Section */}
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          I build **robust, scalable, and user-centered applications** for web and mobile. 
          With a background in <span className="font-semibold">Applied Physics & Computer Science</span>, 
          I specialize in <span className="font-semibold">React, Next.js, Node.js, MongoDB, TypeScript</span>, and <span className="font-semibold">Dart/Flutter</span>. 
          My focus is on delivering impactful solutions that improve user experience and system performance.
        </p>

        {/* Project Highlights */}
        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-10">
          I’ve contributed to projects like <span className="font-semibold">Capital Bank of Kenya</span> and <span className="font-semibold">Afya Diary Kenya</span>, 
          enhancing digital platforms, optimizing performance, and creating intuitive user experiences across web and mobile.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore My Projects
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Let’s Connect
          </Link>
        </div>

        {/* Tech Stack / Social Proof */}
        <div className="mt-6 flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>MongoDB</span>
          <span>Dart/Flutter</span>
        </div>
      </section>
    </>
  );
};

export default Home;
