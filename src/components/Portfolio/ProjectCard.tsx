// src/components/ProjectCard.tsx
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tools, link }) => {
  return (
    <Link href={link} passHref>
      <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="mt-2 text-black">{description}</p>
        <p className="mt-2 text-black font-bold">{tools}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
