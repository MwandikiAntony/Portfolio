'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

const ProjectCard = ({ title, description, stack, github, demo }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    {/* Title */}
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
      {description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-6">
      {stack.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex items-center gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        <Github size={18} />
        GitHub
      </a>

      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
