// src/components/ProjectCard.tsx
import Link from 'next/link';
import { FaTools } from 'react-icons/fa'; // Import an icon for "in-progress"

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string;
  link?: string;
  status: 'finished' | 'in-progress';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tools, link, status }) => {
  return (
    <div
      className={`shadow-lg p-6 rounded-lg cursor-pointer transition-transform transform ${
        status === 'finished'
          ? 'bg-white hover:scale-105'
          : 'bg-yellow-100 opacity-90'
      }`}
    >
      {status === 'finished' && link ? (
        <Link href={link} passHref>
          <div>
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="mt-2 text-black">{description}</p>
            <p className="mt-2 text-black font-bold">{tools}</p>
          </div>
        </Link>
      ) : (
        <div>
          <div className="flex items-center space-x-2">
            <FaTools className="text-yellow-700 text-xl" /> {/* Add the icon */}
            <h3 className="text-xl font-bold text-yellow-700">{title}</h3>
          </div>
          <p className="mt-2 text-yellow-700">{description}</p>
          <p className="mt-2 text-yellow-700 font-bold">{tools}</p>
          <p className="mt-2 text-sm italic text-yellow-600">In Progress</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
