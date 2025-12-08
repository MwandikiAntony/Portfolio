'use client';
import { motion, easeOut } from "framer-motion";
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'Capital Bank of Kenya – Digital Banking Platform',
      description:
        'A secure and scalable digital banking web application designed to streamline financial operations for customers and administrators. It includes role-based access, transaction management, and an intuitive client dashboard.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/capital-bank-kenya',
      demo: 'https://capital-bank-of-kenya.vercel.app/',
    },
    {
      title: 'Afya Diary Kenya – Digital Health Record System',
      description:
        'A healthcare management system that connects patients, community health volunteers (CHVs), and healthcare facilities. Features include patient record tracking, OTP-based authentication, and secure data handling for improved healthcare delivery.',
      stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/afya-diary-kenya',
      demo: 'https://afya-diary-kenya.vercel.app/',
    },
    {
      title: 'EcoPulse Kenya – Sustainability Tracker 🌱',
      description:
        'A responsive React web app that helps users track eco-friendly actions like recycling, planting trees, and conserving water. Includes gamification, progress tracking, eco-tips, dark mode, and persistent storage for daily motivation toward sustainability.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
      github: 'https://github.com/MwandikiAntony/ecopulse-kenya',
      demo: 'https://ecopulse-kenya.vercel.app',
    },
    {
      title: 'Antony Mwandiki Portfolio – Personal Developer Website',
      description:
        'My personal portfolio built with Next.js and Tailwind CSS, showcasing my background in full stack web development, projects, and technical blog. Designed for performance, accessibility, and a clean modern aesthetic.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://tonio-portfolio.vercel.app/',
    },
    {
      title: 'PesaFlow – FinTech Payment Platform (In Development)',
      description:
        'A modern financial technology platform designed to streamline payments and transactions. Features planned include secure user accounts, payment processing, transaction history, and analytics dashboard.',
      stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/MwandikiAntony/PesaFlow',
      demo: '#', 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, } },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-blue">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A selection of projects I’ve designed and developed — combining functionality, scalability,
          and clean design.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projectList.map((project, i) => (
          <motion.div key={i} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
