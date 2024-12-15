declare module 'react-katex' {
    import { FC, HTMLAttributes } from 'react';
  
    interface KaTeXProps extends HTMLAttributes<HTMLDivElement> {
      math: string;
      block?: boolean;
      errorColor?: string;
      renderError?: (error: Error | TypeError) => JSX.Element;
      settings?: Record<string, unknown>;
    }
  
    export const InlineMath: FC<KaTeXProps>;
    export const BlockMath: FC<KaTeXProps>;
  }