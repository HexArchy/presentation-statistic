import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { validityData } from "../../data/chartData";

const ControlMethodsSlide: React.FC = () => {
  const methods = validityData.methods;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Методы контроля валидности
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <Card variant="gradient" className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {method.category}
                </h3>
                <div className="space-y-4">
                  {method.metrics.map((metric) => (
                    <div key={metric.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.name}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ControlMethodsSlide;
