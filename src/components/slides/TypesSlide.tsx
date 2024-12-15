import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import ValidityChart from "../charts/ValidityChart";
import { validityData } from "../../data/chartData";

const TypesSlide: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const radarData = validityData.radar;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Виды валидности
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {
                title: "Внутренняя валидность",
                description:
                  "Насколько надежно установлены причинно-следственные связи",
                color: "blue",
              },
              {
                title: "Внешняя валидность",
                description:
                  "Возможность обобщения результатов на другие условия",
                color: "green",
              },
              {
                title: "Конструктная валидность",
                description: "Точность измерения исследуемых характеристик",
                color: "purple",
              },
              {
                title: "Статистическая валидность",
                description: "Корректность статистических выводов",
                color: "orange",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <Card variant="default" className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 text-${item.color}-400`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Card variant="gradient" className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Оценка валидности
              </h3>
              <ValidityChart data={radarData} />
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TypesSlide;
