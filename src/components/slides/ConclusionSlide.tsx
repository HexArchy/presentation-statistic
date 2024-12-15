import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Target } from "lucide-react";

const ConclusionSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Target className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold">Заключение</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Ключевые выводы</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Валидность - основа достоверного исследования</li>
              <li>• Необходим комплексный подход к контролю</li>
              <li>• Важность документирования всех этапов</li>
              <li>• Регулярная проверка и корректировка</li>
            </ul>
          </Card>

          <Card variant="gradient" className="p-6">
            <h3 className="text-xl font-semibold mb-4">Следующие шаги</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Применение полученных знаний</li>
              <li>• Разработка протоколов валидации</li>
              <li>• Обучение команды исследователей</li>
              <li>• Постоянное совершенствование методов</li>
            </ul>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Card variant="default" className="inline-block p-4">
            <p className="text-gray-400">Спасибо за внимание!</p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;
