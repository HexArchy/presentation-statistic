import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const IntroductionSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Что такое валидность?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          <Card variant="default" className="p-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Определение
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Валидность – это степень соответствия между тем, что мы хотим
                измерить, и тем, что мы действительно измеряем в ходе
                эксперимента.
              </p>
            </motion.div>
          </Card>

          <Card variant="default" className="p-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Значение
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Обеспечение валидности критически важно для получения
                достоверных и надежных результатов исследования.
              </p>
            </motion.div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card variant="gradient" className="p-8 mt-8">
            <h3 className="text-xl font-semibold mb-4">Ключевой вопрос</h3>
            <p className="text-gray-300 text-lg">
              Можем ли мы быть уверены, что наши выводы действительно отражают
              реальность, а не являются результатом посторонних факторов?
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroductionSlide;
