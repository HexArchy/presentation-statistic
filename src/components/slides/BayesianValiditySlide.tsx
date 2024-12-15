import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const BayesianValiditySlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-12">
          Байесовский подход к валидности
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Байесовский коэффициент
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`BF_{10} = \\frac{P(D|H_1)}{P(D|H_0)}`}
              />
              <div className="mt-4">
                <MathFormula
                  block
                  formula={`P(H_1|D) = \\frac{P(D|H_1)P(H_1)}{P(D)}`}
                />
              </div>
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Критерии интерпретации
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>BF₁₀ {"<"} 100: Решающее доказательство H₁</li>
              <li>
                30 {"<"} BF₁₀ {"<"} 100: Очень сильное доказательство
              </li>
              <li>
                10 {"<"} BF₁₀ {"<"} 30: Сильное доказательство
              </li>
              <li>
                3 {"<"} BF₁₀ {"<"} 10: Умеренное доказательство
              </li>
              <li>
                1 {"<"} BF₁₀ {"<"} 3: Слабое доказательство
              </li>
            </ul>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default BayesianValiditySlide;
