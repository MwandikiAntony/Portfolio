import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'DevLink – Developer Portfolio Directory',
      description: 'A full-stack app to showcase developer portfolios, filterable by skills.',
      stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/yourusername/devlink',
      demo: 'https://devlink-demo.vercel.app',
    },
    {
      title: 'Freelancer Invoice Manager',
      description: 'A SaaS-style app to create, manage, and send invoices to clients.',
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/invoice-app',
    },
    {
      title: 'AI Blog Generator',
      description: 'Generate full blog posts from a single prompt using OpenAI API.',
      stack: ['Next.js', 'OpenAI API', 'Tailwind'],
      github: 'https://github.com/yourusername/ai-blog',
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {projectList.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  );
};

export default Projects;
