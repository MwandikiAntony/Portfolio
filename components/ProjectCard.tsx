type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

const ProjectCard = ({ title, description, stack, github, demo }: ProjectCardProps) => (
  <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <div className="text-sm text-gray-500 mb-4">
      Stack: {stack.join(', ')}
    </div>
    <div className="space-x-4">
      <a href={github} target="_blank" className="text-blue-600 underline">GitHub</a>
      {demo && <a href={demo} target="_blank" className="text-green-600 underline">Live Demo</a>}
    </div>
  </div>
);

export default ProjectCard;
