import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SLIDES } from './data/slidesData';
import { Navbar } from './components/Navbar';
import { FooterNav } from './components/FooterNav';
import { GridViewModal } from './components/GridViewModal';

// Slides components
import { Slide01_Hero } from './slides/Slide01_Hero';
import { Slide02_OSI } from './slides/Slide02_OSI';
import { Slide03_Paradigm } from './slides/Slide03_Paradigm';
import { Slide04_TwistingPhysics } from './slides/Slide04_TwistingPhysics';
import { Slide05_Categories } from './slides/Slide05_Categories';
import { Slide06_Duplex } from './slides/Slide06_Duplex';
import { Slide07_10BaseT } from './slides/Slide07_10BaseT';
import { Slide08_100BaseTX } from './slides/Slide08_100BaseTX';
import { Slide09_1000BaseT } from './slides/Slide09_1000BaseT';
import { Slide10_10GBaseT } from './slides/Slide10_10GBaseT';
import { Slide11_CopperVsFiber } from './slides/Slide11_CopperVsFiber';
import { Slide12_ComparisonTable } from './slides/Slide12_ComparisonTable';
import { Slide13_WhyCopperWins } from './slides/Slide13_WhyCopperWins';
import { Slide14_PoE } from './slides/Slide14_PoE';
import { Slide15_Conclusion } from './slides/Slide15_Conclusion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.7, 0, 0.84, 0]
    }
  })
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ieee-theme') || 'dark';
  });

  const totalSlides = SLIDES.length;
  const currentSlideData = SLIDES[currentSlide - 1] || SLIDES[0];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ieee-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleReset = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(1);
  }, []);

  const handleSelectSlide = (slideId) => {
    setDirection(slideId > currentSlide ? 1 : -1);
    setCurrentSlide(slideId);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGridOpen) {
        if (e.key === 'Escape') setIsGridOpen(false);
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          setDirection(-1);
          setCurrentSlide(1);
          break;
        case 'End':
          e.preventDefault();
          setDirection(1);
          setCurrentSlide(totalSlides);
          break;
        case 'm':
        case 'M':
        case 'g':
        case 'G':
          e.preventDefault();
          setIsGridOpen((prev) => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          handleToggleTheme();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isGridOpen, totalSlides]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev < totalSlides) {
            setDirection(1);
            return prev + 1;
          }
          setIsAutoPlay(false);
          return prev;
        });
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlay, totalSlides]);

  // Render Slide Component
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01_Hero onStart={handleNext} onSelectSlide={handleSelectSlide} />;
      case 2:
        return <Slide02_OSI />;
      case 3:
        return <Slide03_Paradigm />;
      case 4:
        return <Slide04_TwistingPhysics />;
      case 5:
        return <Slide05_Categories />;
      case 6:
        return <Slide06_Duplex />;
      case 7:
        return <Slide07_10BaseT />;
      case 8:
        return <Slide08_100BaseTX />;
      case 9:
        return <Slide09_1000BaseT />;
      case 10:
        return <Slide10_10GBaseT />;
      case 11:
        return <Slide11_CopperVsFiber />;
      case 12:
        return <Slide12_ComparisonTable />;
      case 13:
        return <Slide13_WhyCopperWins />;
      case 14:
        return <Slide14_PoE />;
      case 15:
        return <Slide15_Conclusion onReset={handleReset} onOpenGrid={() => setIsGridOpen(true)} />;
      default:
        return <Slide01_Hero onStart={handleNext} />;
    }
  };

  return (
    <div className="presentation-container" data-theme={theme}>
      {/* Top Navbar */}
      <Navbar
        currentSlideData={currentSlideData}
        totalSlides={totalSlides}
        currentSlideIndex={currentSlide - 1}
        onOpenGrid={() => setIsGridOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Slide Viewport with Clean Transition */}
      <main className="slide-viewport">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Footer Navigation */}
      <FooterNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
        onReset={handleReset}
      />

      {/* Slide Overview Grid Modal */}
      <GridViewModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleSelectSlide}
      />
    </div>
  );
}

export default App;
