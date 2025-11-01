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
    let touchStartY = 0;
    let touchStartTime = 0;
    
    const handleWheel = (e) => {
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtTop = scrollTop <= 5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
        
        if (e.deltaY > 50 && isAtBottom && currentSection < sections.length - 1) {
          e.preventDefault();
          if (!isScrolling) {
            isScrolling = true;
            setCurrentSection(prev => prev + 1);
            setTimeout(() => { isScrolling = false; }, 1000);
          }
        } else if (e.deltaY < -50 && isAtTop && currentSection > 0) {
          e.preventDefault();
          if (!isScrolling) {
            isScrolling = true;
            setCurrentSection(prev => prev - 1);
            setTimeout(() => { isScrolling = false; }, 1000);
          }
        }
        return;
      }
      
      // For non-scrollable sections
      e.preventDefault();
      if (isScrolling) return;
      
      if (e.deltaY > 50 && currentSection < sections.length - 1) {
        isScrolling = true;
        setCurrentSection(prev => prev + 1);
        setTimeout(() => { isScrolling = false; }, 1000);
      } else if (e.deltaY < -50 && currentSection > 0) {
        isScrolling = true;
        setCurrentSection(prev => prev - 1);
        setTimeout(() => { isScrolling = false; }, 1000);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e) => {
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      if (!scrollableContainer) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const swipeDistance = touchStartY - touchEndY;
      const swipeTime = touchEndTime - touchStartTime;
      
      // Only process quick swipes with sufficient distance
      if (swipeTime > 500 || Math.abs(swipeDistance) < 80) return;
      
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtTop = scrollTop <= 5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
        
        // Swipe up (positive distance) = next section
        if (swipeDistance > 80 && isAtBottom && currentSection < sections.length - 1) {
          isScrolling = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isScrolling = false; }, 1000);
        }
        // Swipe down (negative distance) = previous section
        else if (swipeDistance < -80 && isAtTop && currentSection > 0) {
          isScrolling = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      } else {
        // For non-scrollable sections (Home, About, Skills)
        if (swipeDistance > 80 && currentSection < sections.length - 1) {
          isScrolling = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isScrolling = false; }, 1000);
        } else if (swipeDistance < -80 && currentSection > 0) {
          isScrolling = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, sections.length]);

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
    <div className="App relative">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Section Indicators - Desktop Only */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content with Smooth Transitions */}
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {renderSection()}
      </motion.div>
    </div>
  );
}

export default App;