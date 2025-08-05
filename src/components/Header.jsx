import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: t('nav_projects') },
    { href: '#about', label: t('nav_about') },
    { href: '#skills', label: t('nav_skills') },
    { href: '#contact', label: t('nav_contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary dark:text-dark-primary">
          PB
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary dark:hover:text-dark-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-foreground/10 dark:hover:bg-dark-foreground/10 transition-colors">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage('es')}
              className={`font-semibold ${language === 'es' ? 'text-primary dark:text-dark-primary' : ''}`}
            >
              ES
            </button>
            <span className="text-foreground/50 dark:text-dark-foreground/50">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`font-semibold ${language === 'en' ? 'text-primary dark:text-dark-primary' : ''}`}
            >
              EN
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background dark:bg-dark-background pb-4">
          <div className="container mx-auto px-6 flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary dark:hover:text-dark-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;