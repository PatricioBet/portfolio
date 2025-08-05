import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t('about_title')}</h2>
          <div className="max-w-3xl mx-auto text-center text-lg text-foreground/80 dark:text-dark-foreground/80 leading-relaxed">
            <p>{t('about_text')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;