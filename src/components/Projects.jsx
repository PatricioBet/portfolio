import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  PythonIcon as PyIcon,
  ReactIcon as RIcon,
  JsIcon as JSIcon,
  NodeIcon as NIcon 
} from './Skills';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects]             = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter]     = useState('all');

  const techFilters = [
    { value: 'all',        label: t('projects_filter_all'), icon: null },
    { value: 'react',      label: 'React',     icon: <RIcon className="w-6 h-6" /> },
    { value: 'python',     label: 'Python',    icon: <PyIcon className="w-6 h-6" /> },
    { value: 'javascript', label: 'JavaScript',icon: <JSIcon className="w-6 h-6" /> },
    { value: 'node.js',    label: 'Node.js',   icon: <NIcon className="w-6 h-6" /> },
  ];

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        // normalizamos las tags de cada proyecto a minúsculas
        const normalized = data.map(proj => ({
          ...proj,
          tags: proj.tags.map(tag => tag.toLowerCase())
        }));
        setProjects(normalized);
        setFilteredProjects(normalized);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(p => p.tags.includes(activeFilter))
      );
    }
  }, [activeFilter, projects]);

  return (
    <section id="projects" className="py-20 bg-background/50 dark:bg-dark-background/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">{t('projects_title')}</h2>
        {/* filtros */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {techFilters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                activeFilter === filter.value
                  ? 'bg-primary text-white dark:bg-dark-primary dark:text-dark-background shadow-lg'
                  : 'bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground hover:bg-foreground/5 dark:hover:bg-dark-foreground/5'
              }`}
            >
              {filter.icon && (
                <span className={activeFilter === filter.value ? 'grayscale-0' : 'grayscale'}>
                  {filter.icon}
                </span>
              )}
              {filter.label}
            </button>
          ))}
        </div>

        {/* grid de tarjetas */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;