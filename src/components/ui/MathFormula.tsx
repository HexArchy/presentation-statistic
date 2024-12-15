import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

interface MathFormulaProps {
  formula: string;
  block?: boolean;
  className?: string;
}

const MathFormula: React.FC<MathFormulaProps> = ({
  formula,
  block = false,
  className = "",
}) => {
  return block ? (
    <div className={className}>
      <BlockMath math={formula} />
    </div>
  ) : (
    <InlineMath math={formula} className={className} />
  );
};

export default MathFormula;
