import { ReactNode } from "react";
import styles from "./Banner.module.scss";

const Banner = ({ title, paragraph, footer = <></>, bgImg, width = "100%", height = "480px" }: BannerPropsType) => {
  return (
    <div
      className={styles.mainImageBox}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bgImg})`,
        width,
        height,
      }}
    >
      <h1>{title}</h1>
      <main className={styles.mainParagraph}>
        <div className={styles.paragraphBox}>{paragraph}</div>
      </main>
      {footer}
    </div>
  );
};

interface BannerPropsType {
  title: string;
  paragraph: ReactNode;
  footer?: ReactNode;
  bgImg: string;
  width?: string;
  height?: string;
}

export default Banner;
