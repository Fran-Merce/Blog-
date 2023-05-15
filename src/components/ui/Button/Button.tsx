import { getClassName } from "@/helpers";

import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button = ({
  customClass,
  size = "md",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const className = getClassName(styles, [
    customClass,
    size,
    variant,
    "button",
  ]);

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
