import React from "react";
import styles from "./HowItWorksBox.module.scss";

const HowItWorksBox = ({ svg, title, text }: HowItWorksBoxPropsType) => {
  return (
    <div className={styles.howItWorksBox}>
      <div className={styles.howItWorksBoxSvg}>{svg}</div>
      <div className={styles.howItWorksBoxContents}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HowItWorksBox;

interface HowItWorksBoxPropsType {
  svg: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}
