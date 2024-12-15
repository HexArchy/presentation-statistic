import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const ReliabilityCalculationSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Оценка надежности измерений
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Коэффициент альфа Кронбаха
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`\\alpha = \\frac{K}{K-1}\\left(1-\\frac{\\sum_{i=1}^K \\sigma^2_i}{\\sigma^2_x}\\right)`}
              />
            </div>
            <div className="mt-4 text-gray-300">
              <p>где:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>K - количество компонентов</li>
                <li>σ²ᵢ - дисперсия i-го компонента</li>
                <li>σ²x - дисперсия суммарного балла</li>
              </ul>
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Надежность ретестовая
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`r_{tt} = \\frac{\\sum(X_1 - \\bar{X_1})(X_2 - \\bar{X_2})}{\\sqrt{\\sum(X_1 - \\bar{X_1})^2\\sum(X_2 - \\bar{X_2})^2}}`}
              />
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ReliabilityCalculationSlide;
