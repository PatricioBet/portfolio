import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-lg md:text-xl font-normal block text-primary dark:text-dark-primary">{t('hero_greeting')}</span>
          Patricio Betancourt
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 dark:text-dark-foreground/80 mb-6">
          {t('hero_title')}
        </h2>
        <p className="max-w-2xl mx-auto text-foreground/70 dark:text-dark-foreground/70 mb-8">
          {t('hero_bio')}
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/PatricioBet" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/10 dark:hover:bg-dark-foreground/10 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/patricio-betancourt/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/10 dark:hover:bg-dark-foreground/10 transition-colors">
            <Linkedin size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;