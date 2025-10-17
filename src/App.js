import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    let isScrolling = false;
    
    const handleWheel = (e) => {
      const target = e.target.closest('.overflow-y-auto');
      if (target) return;
      
      e.preventDefault();
      if (isScrolling) return;
      
      if (e.deltaY > 30) {
        if (currentSection < sections.length - 1) {
          isScrolling = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isScrolling = false; }, 500);
        }
      } else if (e.deltaY < -30) {
        if (currentSection > 0) {
          isScrolling = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isScrolling = false; }, 500);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  const renderSection = () => {
    switch(currentSection) {
      case 0: return <Home />;
      case 1: return <About />;
      case 2: return <Skills />;
      case 3: return <Projects />;
      case 4: return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderSection()}
      </motion.div>
    </div>
  );
}

export default App;