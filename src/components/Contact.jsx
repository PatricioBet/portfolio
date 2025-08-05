import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-background dark:bg-dark-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('contact_title')}</h2>
          <p className="max-w-xl mx-auto text-lg text-foreground/80 dark:text-dark-foreground/80 mb-8">
            {t('contact_text')}
          </p>
          <a
            href="mailto:patobetan8@gmail.com"
            className="inline-block bg-primary text-white dark:bg-dark-primary dark:text-dark-background font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            {t('contact_button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;