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
    let touchEndY = 0;
    
    const handleWheel = (e) => {
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
        
        if (e.deltaY > 30 && isAtBottom && currentSection < sections.length - 1) {
          e.preventDefault();
          if (!isScrolling) {
            isScrolling = true;
            setCurrentSection(prev => prev + 1);
            setTimeout(() => { isScrolling = false; }, 500);
          }
        } else if (e.deltaY < -30 && isAtTop && currentSection > 0) {
          e.preventDefault();
          if (!isScrolling) {
            isScrolling = true;
            setCurrentSection(prev => prev - 1);
            setTimeout(() => { isScrolling = false; }, 500);
          }
        }
        return;
      }
      
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

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      if (!scrollableContainer) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const scrollableContainer = e.target.closest('.overflow-y-auto');
      touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      
      // Increased threshold for less sensitivity and added debouncing
      if (isScrolling || Math.abs(swipeDistance) < 100) return;
      
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtTop = scrollTop <= 10; // Small buffer for better detection
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        
        // Swipe up (positive distance) = next page
        if (swipeDistance > 100 && isAtBottom && currentSection < sections.length - 1) {
          isScrolling = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isScrolling = false; }, 800); // Longer delay
        }
        // Swipe down (negative distance) = previous page  
        else if (swipeDistance < -100 && isAtTop && currentSection > 0) {
          isScrolling = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isScrolling = false; }, 800); // Longer delay
        }
        return;
      }
      
      // For non-scrollable sections
      if (swipeDistance > 100 && currentSection < sections.length - 1) {
        isScrolling = true;
        setCurrentSection(prev => prev + 1);
        setTimeout(() => { isScrolling = false; }, 800);
      } else if (swipeDistance < -100 && currentSection > 0) {
        isScrolling = true;
        setCurrentSection(prev => prev - 1);
        setTimeout(() => { isScrolling = false; }, 800);
      }
    };

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
      
      {/* Section Indicators */}
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

      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {renderSection()}
      </motion.div>
      
      {/* Mobile Navigation Hint */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-xs text-center">
          <div>Swipe up: Next page</div>
          <div>Swipe down: Previous page</div>
        </div>
      </div>
    </div>
  );
}

export default App;