import React from "react";
import { motion } from "framer-motion";
import { GradientIcon } from "../ui/Icons";
import Card from "../ui/Card";

const TitleSlide: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <GradientIcon
            name="target"
            size={80}
            gradient="from-blue-500 to-indigo-500"
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Валидность эксперимента
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Как обеспечить достоверность исследования и избежать ошибок
        </motion.p>

        <motion.div
          className="pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Card variant="gradient" className="inline-block">
            <p className="text-gray-400">
              Презентация подготовлена для курса
              <br />
              "Методология научных исследований"
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TitleSlide;
