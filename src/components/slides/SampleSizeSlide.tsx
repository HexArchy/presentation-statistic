import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import MathFormula from "../ui/MathFormula";

const SampleSizeSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Расчет размера выборки
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Формула для расчета размера выборки
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <MathFormula
                  block
                  formula={`n = \\frac{(z_{\\alpha/2})^2 \\times p(1-p)}{E^2}`}
                />
              </div>
              <p className="text-gray-300">где:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>n - размер выборки</li>
                <li>z_α/2 - критическое значение</li>
                <li>p - ожидаемая пропорция</li>
                <li>E - допустимая ошибка</li>
              </ul>
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Поправка на конечную популяцию
            </h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`n_{adj} = \\frac{n}{1 + \\frac{n-1}{N}}`}
              />
            </div>
            <p className="mt-4 text-gray-300">
              N - размер генеральной совокупности
            </p>
          </Card>
        </div>

        <Card variant="gradient" className="p-6">
          <h3 className="text-xl font-semibold mb-4">Пример расчета</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-2">Исходные данные:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Уровень доверия = 95% (z = 1.96)</li>
                <li>Ожидаемая пропорция = 0.5</li>
                <li>Допустимая ошибка = 5%</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <MathFormula
                block
                formula={`n = \\frac{1.96^2 \\times 0.5(1-0.5)}{0.05^2} = 384.16`}
              />
              <p className="text-gray-300 mt-2">
                Округляем до n = 385 участников
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default SampleSizeSlide;
