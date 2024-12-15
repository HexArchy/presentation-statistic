import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const EffectSizeSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-12">
          Размеры эффекта
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Cohen's d</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`d = \\frac{M_1 - M_2}{s_{pooled}}`}
              />
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Pearson's r</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`r = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i - \\bar{x})^2\\sum(y_i - \\bar{y})^2}}`}
              />
            </div>
          </Card>

          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Eta squared</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`\\eta^2 = \\frac{SS_{effect}}{SS_{total}}`}
              />
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default EffectSizeSlide;
