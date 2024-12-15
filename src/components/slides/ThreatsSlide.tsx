import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import ThreatsChart from "../charts/ThreatsChart";
import { validityData } from "../../data/chartData";

const ThreatsSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Угрозы валидности
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <ThreatsChart data={validityData.threats} />
          </Card>

          <div className="space-y-4">
            {validityData.threats.map((threat, index) => (
              <motion.div
                key={threat.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card variant="default" className="p-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: threat.color }}
                    />
                    <h3 className="text-lg font-semibold">{threat.name}</h3>
                  </div>
                  <p className="mt-2 text-gray-400">{threat.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreatsSlide;
