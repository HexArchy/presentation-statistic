import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SlideContainerProps {
  children: React.ReactNode[];
  currentSlide: number;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  currentSlide,
  direction,
}) => {
  const [isPresenting, setIsPresenting] = useState(false);

  // Обработка полноэкранного режима
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "f") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          setIsPresenting(true);
        } else {
          document.exitFullscreen();
          setIsPresenting(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-gray-900 ${
        isPresenting ? "cursor-none" : ""
      }`}
    >
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      {/* Анимированные точки на фоне */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Контейнер для слайдов */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Индикатор презентационного режима */}
      {isPresenting && (
        <div className="fixed top-4 right-4 bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-300">
          Презентационный режим (F)
        </div>
      )}
    </div>
  );
};

// Хук для управления слайдами
export const useSlideControl = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return {
    currentSlide,
    direction,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};

export default SlideContainer;
