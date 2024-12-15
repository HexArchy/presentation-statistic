import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "outlined";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  onClick,
  hover = true,
}) => {
  const baseStyles = "rounded-xl p-6 transition-all duration-300";

  const variants = {
    default: "bg-gray-800/50",
    gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
    outlined: "border border-gray-700 bg-gray-900/50",
  };

  const hoverStyles = hover
    ? "hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
