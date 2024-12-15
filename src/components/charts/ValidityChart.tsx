import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";

export interface ValidityMetric {
  aspect: string;
  value: number;
  fullMark: number;
}

interface ValidityChartProps {
  data: ValidityMetric[];
  className?: string;
}

const ValidityChart: React.FC<ValidityChartProps> = ({
  data,
  className = "",
}) => {
  return (
    <div className={`w-full h-[400px] ${className}`}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          {/* Настраиваем сетку */}
          <PolarGrid stroke="#374151" strokeWidth={0.5} />

          {/* Настраиваем метки осей */}
          <PolarAngleAxis
            dataKey="aspect"
            tick={{
              fill: "#9CA3AF",
              fontSize: 14,
              fontWeight: 500,
            }}
            stroke="#4B5563"
          />

          {/* Настраиваем значения */}
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            axisLine={{ stroke: "#4B5563" }}
            tick={{
              fill: "#9CA3AF",
              fontSize: 12,
            }}
          />

          {/* Настраиваем сам график */}
          <Radar
            name="Значение"
            dataKey="value"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.3}
            strokeWidth={2}
          />

          {/* Добавляем легенду */}
          <Legend
            wrapperStyle={{
              color: "#9CA3AF",
              fontSize: 14,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ValidityChart;
