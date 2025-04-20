// src/components/Portfolio.tsx
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects: { 
    id: number; 
    title: string; 
    description: string; 
    tools: string; 
    link?: string; 
    status: 'finished' | 'in-progress'; 
  }[] = [
    { 
        id: 1, 
        title: 'Proxy Server',
        description: 'Developed parts of a proxy server that converts data between XML format and a binary format.',
        tools: 'Tools: C, Valgrind, NetCat, XML.',
        link: 'https://github.com/chrisfcb/ProxyServer',
        status: 'finished' // Mark as finished
    },
    { 
        id: 2, 
        title: 'Regression Model',
        description: 'Used exploratory data analysis and feature selection to create a regression model that predicts the travel time for a taxi ride in New York.', 
        tools: 'Tools: Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook.',
        link: 'https://colab.research.google.com/drive/1jtGsctra9m9HfvZudMhYy3Z7v9dcWa3d?usp=sharing',
        status: 'finished' // Mark as finished
    },
    { 
        id: 3, 
        title: 'Domain-Specific Programming Language',
        description: 'Participated in a group project to develop a domain-specific programming language for drones.',
        tools: 'Tools: Java, ANTLR, Gradle, GitHub.',
        link: 'https://github.com/chrisfcb/Domain-Specific-Language',
        status: 'finished' // Mark as finished
    },
    { 
      id: 4, 
      title: 'Self-Driving Car Simulation',
      description: 'Developed a self-driving car simulation using reinforcement learning techniques.',
      tools: 'Tools: JavaScript, CSS, HTML.',
      link: 'https://github.com/chrisfcb/Self-Driving-Car',
      status: 'finished' // Mark as finished
   },
    { 
      id: 5, 
      title: 'Portfolio Website',
      description: 'This portfolio website is built using React and Next.js.', 
      tools: 'Tools: React, Next.js, Tailwind CSS.',
      link: 'https://github.com/chrisfcb/my-personal-website',
      status: 'finished' // Mark as finished
    }, 
    { 
      id: 6, 
      title: 'AI weather app',
      description: 'University project where I am working in a team of six to develop an AI powered weather app - currently in progress.',
      tools: 'Tools: Kotlin, Jetpack, Android Studio, openAI and MET API, GitHub.',
      status: 'in-progress' // Mark as in-progress
    }
  ];

  return (
    <section id="portfolio" className="p-10">
      <h2 className="text-3xl font-semibold text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            tools={project.tools} 
            description={project.description} 
            link={project.link} 
            status={project.status} // Pass the status to ProjectCard
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;