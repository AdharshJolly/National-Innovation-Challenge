import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "accent" | "primary" | "outline-dark" | "ghost-dark";
  size?: "md" | "lg";
  arrow?: boolean;
  /** Renders a non-interactive button instead of a link. */
  disabled?: boolean;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", arrow, disabled, children, className = "", ...rest }: Props) {
  const classes = `btn btn--${variant} btn--${size} ${className}`;
  if (disabled) {
    return (
      <button type="button" className={`${classes} btn--disabled`} disabled>
        <span>{children}</span>
      </button>
    );
  }
  return (
    <a className={classes} {...rest}>
      <span>{children}</span>
      {arrow && <span className="btn__arrow"><Icon name="arrow" size={18} /></span>}
    </a>
  );
}
