import { useEffect, useState } from 'react';
import Home from './Home';

function App() {
  const [focusedSection, setFocusedSection] = useState(null);

  // Add global styles and smooth scroll for anchor links
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
        padding-top: 80px; /* Adjust based on header height */
      }
      
      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 1.2s ease-out;
      }
      
      .shadow-3xl {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }
    `;
    document.head.appendChild(style);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.title = "BestCallerAI - Revolutionize Your Business with AI";

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Handle scroll to reveal upper sections when scrolling up
  useEffect(() => {
    if (!focusedSection) return;

    const handleScroll = () => {
      const el = document.getElementById(focusedSection);
      if (!el) return;
      const rectTop = el.getBoundingClientRect().top;
      if (rectTop > 80) { // Adjust based on header height
        setFocusedSection(null);
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY < -10) {
        setFocusedSection(null);
      }
    };

    let touchStartY = null;
    const handleTouchStart = (e) => {
      touchStartY = e.touches?.[0]?.clientY ?? null;
    };
    const handleTouchMove = (e) => {
      if (touchStartY == null) return;
      const currentY = e.touches?.[0]?.clientY ?? 0;
      if (currentY - touchStartY > 30) {
        setFocusedSection(null);
        touchStartY = null;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [focusedSection]);

  // Function to navigate to a section and show only that section and below
  const navigateTo = (sectionId) => {
    setFocusedSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <Home focusedSection={focusedSection} onNavigate={navigateTo} />
  );
}

export default App;