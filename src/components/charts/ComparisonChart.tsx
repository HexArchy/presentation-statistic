import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ComparisonChartData {
  name: string;
  control: number;
  experimental: number;
}

interface ComparisonChartProps {
  data: ComparisonChartData[];
  className?: string;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  data,
  className = "",
}) => {
  return (
    <div className={`w-full h-[400px] ${className}`}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "0.5rem",
              color: "#F3F4F6",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="control"
            stroke="#60A5FA"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Контрольная группа"
          />
          <Line
            type="monotone"
            dataKey="experimental"
            stroke="#34D399"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Экспериментальная группа"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
