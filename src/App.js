import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { siteConfig } from './data/portfolioData';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Conditionally import Projects if enabled
// const Projects = siteConfig.features.showProjects ? 
//   React.lazy(() => import('./components/Projects')) : null;

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Certificates />
            
            {/* Conditionally render Projects section */}
            {/* {siteConfig.features.showProjects && Projects && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </React.Suspense>
            )} */}
            
              <Contact />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;