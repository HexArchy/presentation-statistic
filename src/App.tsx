import React, { useState } from "react";
import SlideContainer from "./components/layout/SlideContainer";
import Navigation from "./components/layout/Navigation";
import TitleSlide from "./components/slides/TitleSlide";
import IntroductionSlide from "./components/slides/IntroductionSlide";
import TypesSlide from "./components/slides/TypesSlide";
import ThreatsSlide from "./components/slides/ThreatsSlide";
import ControlMethodsSlide from "./components/slides/ControlMethodsSlide";
import PracticalSlide from "./components/slides/PracticalSlide";
import ConclusionSlide from "./components/slides/ConclusionSlide";

const App: React.FC = () => {
  const slides = [
    TitleSlide,
    IntroductionSlide,
    TypesSlide,
    ThreatsSlide,
    ControlMethodsSlide,
    PracticalSlide,
    ConclusionSlide,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleSlideSelect = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <SlideContainer currentSlide={currentSlide} direction={direction}>
        {slides.map((Slide, index) => (
          <Slide key={index} />
        ))}
      </SlideContainer>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onSlideSelect={handleSlideSelect}
      />
    </div>
  );
};

export default App;
