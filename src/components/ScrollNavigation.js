import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pages = ['/', '/about', '/skills', '/projects', '/contact'];
  
  useEffect(() => {
    let isScrolling = false;
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const currentIndex = pages.indexOf(location.pathname);
      
      if (e.deltaY > 30 && currentIndex < pages.length - 1) {
        isScrolling = true;
        navigate(pages[currentIndex + 1]);
        setTimeout(() => { isScrolling = false; }, 600);
      } else if (e.deltaY < -30 && currentIndex > 0) {
        isScrolling = true;
        navigate(pages[currentIndex - 1]);
        setTimeout(() => { isScrolling = false; }, 600);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [location.pathname, navigate]);

  return null;
};

export default ScrollNavigation;