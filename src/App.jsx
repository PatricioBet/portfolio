import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <Suspense fallback="loading...">
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <Analytics />
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;