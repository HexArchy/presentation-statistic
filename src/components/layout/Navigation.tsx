import React from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icons";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSlideSelect: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onSlideSelect,
}) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Индикатор прогресса */}
        <div className="hidden md:flex items-center gap-2">
          <div className="text-gray-400">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </div>
          <div className="w-32 h-1 bg-gray-800 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Навигационные точки */}
        <div className="flex-1 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideSelect(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 w-4"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Кнопки навигации */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrev}
            disabled={currentSlide === 0}
            icon={<Icon name="chevronLeft" size={20} />}
          >
            Назад
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            icon={<Icon name="chevronRight" size={20} />}
          >
            Вперед
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
