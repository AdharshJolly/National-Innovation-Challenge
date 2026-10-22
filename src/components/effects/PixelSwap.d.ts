import type { CSSProperties, ReactElement, ReactNode } from "react";

export interface PixelSwapProps {
  firstContent?: ReactNode;
  secondContent?: ReactNode;
  pattern?:
    | "pointer" | "random" | "center" | "edges" | "left-to-right" | "right-to-left"
    | "top-to-bottom" | "bottom-to-top" | "diagonal" | "spiral";
  pixelSize?: number;
  gap?: number;
  pixelRadius?: number;
  pixelScale?: number;
  pixelSpin?: number;
  duration?: number;
  pixelDuration?: number;
  randomness?: number;
  bounce?: number;
  trigger?: "hover" | "click" | "none";
  intro?: boolean;
  initialActive?: boolean;
  active?: boolean;
  onActiveChange?: (active: boolean) => void;
  onComplete?: (active: boolean) => void;
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
}

declare const PixelSwap: (props: PixelSwapProps) => ReactElement;
export default PixelSwap;
