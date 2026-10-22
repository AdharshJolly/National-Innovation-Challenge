import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "accent" | "primary" | "outline-dark" | "ghost-dark";
  size?: "md" | "lg";
  arrow?: boolean;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", arrow, children, className = "", ...rest }: Props) {
  return (
    <a className={`btn btn--${variant} btn--${size} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && <span className="btn__arrow"><Icon name="arrow" size={18} /></span>}
    </a>
  );
}
