'use client';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto px-6 py-20 space-y-10"
    >
      <motion.h2
        variants={item}
        className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed tracking-wide"
      >
        I’m a results-driven{' '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Full Stack Web Developer
        </span>{' '}
        with a strong foundation in{' '}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">Applied Physics</span>{' '}
        and{' '}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Computer Science
        </span>
        . I specialize in building modern, secure, and scalable web applications using technologies
        such as{' '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          React, Next.js, Node.js, Express, MongoDB,
        </span>{' '}
        and{' '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed tracking-wide"
      >
        My experience spans across developing and deploying production-ready applications,
        including notable projects like the{' '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Capital Bank of Kenya App
        </span>
        — a digital banking platform that streamlines financial operations — and the{' '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">Afya Diary Kenya App</span>
        , a healthcare system designed to enhance patient–doctor engagement and digital health
        record management.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed tracking-wide"
      >
        I’ve worked with startups, enterprise teams, and freelance clients to deliver
        end-to-end solutions — from{' '}
        <span className="font-medium text-indigo-600 dark:text-indigo-400">
          UX/UI design and backend architecture
        </span>{' '}
        to{' '}
        <span className="font-medium text-indigo-600 dark:text-indigo-400">
          cloud deployment and performance optimization
        </span>
        . My focus is always on creating intuitive, responsive user experiences backed by clean,
        maintainable code.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed tracking-wide"
      >
        With my analytical background in physics, I bring a{' '}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          problem-solving mindset
        </span>{' '}
        to every project — blending logic, creativity, and precision to deliver innovative software
        solutions. I continuously learn and adapt to new tools, frameworks, and design patterns to
        stay ahead in the fast-evolving tech landscape.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed tracking-wide"
      >
        When I’m not coding, you’ll find me mentoring developers, exploring product design, or
        contributing to open-source projects that create meaningful digital impact.
      </motion.p>
    </motion.section>
  );
};

export default About;
