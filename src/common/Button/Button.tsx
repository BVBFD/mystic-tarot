import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({
  href = "",
  btnText,
  bgColor = "var(--button-bg-color)",
  width = "84px",
  height = "40px",
  fontSize = "0.875rem",
}: BtnPropsType) => {
  return (
    <Link className={styles.button} href={href} style={{ backgroundColor: bgColor, width, height, fontSize }}>
      {btnText}
    </Link>
  );
};

export default Button;

interface BtnPropsType {
  href?: string;
  btnText: string;
  bgColor?: "var(--button-bg-color)" | "var(--button-bg-secondary-color)";
  width?: string;
  height?: string;
  fontSize?: string;
}
