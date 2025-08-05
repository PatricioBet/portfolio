import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { language } = useContext(LanguageContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="bg-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden flex flex-col"
      variants={cardVariants}
    >
      <img src={project.image} alt={project.title[language]} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/3b82f6/ffffff?text=Project+Image'; }}/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-card-foreground dark:text-dark-card-foreground">{project.title[language]}</h3>
        <p className="text-card-foreground/80 dark:text-dark-card-foreground/80 mb-4 flex-grow">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary dark:bg-dark-primary/20 dark:text-dark-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary dark:text-dark-primary font-semibold hover:underline flex items-center">
          Ver proyecto <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;