import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card dark:bg-dark-card py-6">
      <div className="container mx-auto px-6 text-center text-sm text-card-foreground/70 dark:text-dark-card-foreground/70">
        <p>&copy; {currentYear} {t('footer_text')}</p>
      </div>
    </footer>
  );
};
export default Footer;