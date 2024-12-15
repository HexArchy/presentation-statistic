import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const CrossValidationSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-12">
          Методы перекрестной проверки
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">K-fold валидация</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`CV_{score} = \\frac{1}{K}\\sum_{i=1}^K MSE_i`}
              />
              <div className="mt-4">
                <MathFormula
                  block
                  formula={`MSE = \\frac{1}{n}\\sum_{i=1}^n (y_i - \\hat{y}_i)^2`}
                />
              </div>
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Leave-one-out CV</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`LOOCV = \\frac{1}{n}\\sum_{i=1}^n (y_i - \\hat{y}_{(-i)})^2`}
              />
            </div>
            <p className="mt-4 text-gray-300">
              где ŷ₍₋ᵢ₎ - предсказание для i-го наблюдения, полученное на модели
              без него
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default CrossValidationSlide;
