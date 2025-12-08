import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

      <section className="text-center py-24 px-6 transition-colors duration-500 bg-white dark:bg-gray-900">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:opacity-80 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeIn">
          Hi, I’m <span className="text-blue-600">Antony Mwandiki</span> — Full Stack Software Developer
        </h1>

        {/* About Section */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 opacity-0 animate-fadeIn delay-200">
          I build <span className="font-semibold">robust, scalable, and user-centered applications</span> for web and mobile. 
          With a background in <span className="font-semibold">Applied Physics & Computer Science</span>, I specialize in 
          <span className="font-semibold"> React, Next.js, Node.js, MongoDB, TypeScript</span>, and <span className="font-semibold">Dart/Flutter</span>. 
          My focus is on delivering impactful solutions that improve user experience and system performance.
        </p>

        {/* Project Highlights */}
        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto mb-10 opacity-0 animate-fadeIn delay-400">
          I’ve contributed to projects like <span className="font-semibold">Capital Bank of Kenya</span> and <span className="font-semibold">Afya Diary Kenya</span>, 
          enhancing digital platforms, optimizing performance, and creating intuitive user experiences across web and mobile.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4 mb-6 opacity-0 animate-fadeIn delay-600">
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
        <div className="mt-6 flex justify-center gap-6 text-gray-600 dark:text-gray-300 opacity-0 animate-fadeIn delay-800">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Dart/Flutter'].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-gray-300 dark:border-gray-500 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </>
  );
};

export default Home;
