import { getClassName } from "@/helpers";

import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
  size?: "sm" | "md" | "lg" | "full";
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button = ({
  customClass = "",
  size = "sm",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const className: string = getClassName(styles, [size, variant, "button"]);
  return (
    <button className={`${customClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
