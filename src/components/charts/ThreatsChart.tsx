import React from "react";
import Card from "../ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface ThreatData {
  name: string;
  value: number;
  color: string;
}

interface ThreatsChartProps {
  data: ThreatData[];
  className?: string;
}

const ThreatsChart: React.FC<ThreatsChartProps> = ({
  data,
  className = "",
}) => {
  return (
    <Card className={`w-full h-[400px] ${className}`}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "0.5rem",
              color: "#F3F4F6",
            }}
            formatter={(value: number, name: string) => [`${value}%`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ThreatsChart;
