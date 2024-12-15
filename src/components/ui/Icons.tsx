import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Shield,
  Target,
  AlertTriangle,
  Database,
  CheckCircle,
  BarChart2,
  PieChart,
  LineChart,
  Zap,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const iconComponents = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  externalLink: ExternalLink,
  bookOpen: BookOpen,
  shield: Shield,
  target: Target,
  alertTriangle: AlertTriangle,
  database: Database,
  checkCircle: CheckCircle,
  barChart: BarChart2,
  pieChart: PieChart,
  lineChart: LineChart,
  zap: Zap,
  arrowRight: ArrowRight,
  plus: Plus,
  minus: Minus,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={`inline-block ${className}`}
    />
  );
};

// Градиентные иконки
export const GradientIcon: React.FC<IconProps & { gradient?: string }> = ({
  name,
  size = 24,
  className = "",
  gradient = "from-blue-500 to-purple-500",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-sm opacity-50`}
      />
      <Icon name={name} size={size} className="relative z-10" />
    </div>
  );
};

// Анимированные иконки
export const AnimatedIcon: React.FC<IconProps & { animation?: string }> = ({
  name,
  size = 24,
  className = "",
  animation = "pulse",
}) => {
  const animations = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    ping: "animate-ping",
  };

  return (
    <Icon
      name={name}
      size={size}
      className={`${
        animations[animation as keyof typeof animations]
      } ${className}`}
    />
  );
};

export default Icon;
