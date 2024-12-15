import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { CheckCircle } from "lucide-react";
import { validityData } from "../../data/chartData";

const PracticalSlide: React.FC = () => {
  const practices = validityData.practical;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Практические рекомендации
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.phase}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card variant="gradient" className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold">{practice.phase}</h3>
                  <div className="text-3xl font-bold text-blue-400 mt-2">
                    {practice.score}%
                  </div>
                </div>
                <ul className="space-y-3">
                  {practice.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{rec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PracticalSlide;
