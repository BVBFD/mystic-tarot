import { ReactNode, HTMLProps } from "react";
import styles from "./Banner.module.scss";

const Banner = ({
  title,
  paragraph,
  footer = <></>,
  bgImg,
  width = "100%",
  height = "480px",
  className = "",
  ...props
}: BannerPropsType) => {
  return (
    <label
      {...props}
      className={`${styles.mainImageBox} ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bgImg})`,
        width,
        height,
        ...props.style,
      }}
    >
      <h1>{title}</h1>
      <main className={styles.mainParagraph}>
        <div className={styles.paragraphBox}>{paragraph}</div>
      </main>
      {footer}
    </label>
  );
};

interface BannerPropsType extends HTMLProps<HTMLLabelElement> {
  title: string;
  paragraph: ReactNode;
  footer?: ReactNode;
  bgImg: string;
  width?: string;
  height?: string;
  className?: string;
}

export default Banner;
