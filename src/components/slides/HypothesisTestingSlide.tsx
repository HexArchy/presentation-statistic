import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const HypothesisTestingSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Проверка статистических гипотез
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              t-критерий для независимых выборок
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`t = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}`}
              />
            </div>
            <p className="mt-4 text-gray-300">Степени свободы:</p>
            <div className="mt-2">
              <MathFormula
                block
                formula={`df = \\frac{(\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2})^2}{\\frac{(s_1^2/n_1)^2}{n_1-1} + \\frac{(s_2^2/n_2)^2}{n_2-1}}`}
              />
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Доверительный интервал
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`CI = \\bar{X} \\pm t_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}}`}
              />
            </div>
            <div className="mt-4 text-gray-300">
              <p>Интерпретация:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>95% CI не включает 0 → значимый эффект</li>
                <li>Узкий CI → высокая точность</li>
                <li>Широкий CI → низкая точность</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default HypothesisTestingSlide;
