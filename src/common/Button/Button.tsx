import Link from "next/link";
import { CSSProperties, HTMLProps } from "react";
import styles from "./Button.module.scss";

const Button = ({
  href = "",
  btnText,
  bgColor = "primary",
  width = "84px",
  height = "40px",
  fontSize = "0.875rem",
  style = {},
  className = "",
  ...props
}: BtnPropsType) => {
  const combinedStyle: CSSProperties = {
    backgroundColor: bgColor === "primary" ? "var(--button-bg-color)" : "var(--button-bg-secondary-color)",
    width,
    height,
    fontSize,
    ...style,
  };

  return (
    <Link {...props} className={`${styles.button} ${className}`} href={href} style={combinedStyle}>
      {btnText}
    </Link>
  );
};

export default Button;

interface BtnPropsType extends HTMLProps<HTMLAnchorElement> {
  href?: string;
  btnText: string;
  bgColor?: "primary" | "secondary";
  width?: string;
  height?: string;
  fontSize?: string;
  style?: CSSProperties;
  className?: string;
}
