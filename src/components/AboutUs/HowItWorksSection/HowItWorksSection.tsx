import React from "react";
import SectionTitle from "src/common/SectionTitle/SectionTitle";
import styles from "./HowItWorksSection.module.scss";
import HowItWorksBox from "./HowItWorksBox/HowItWorksBox";
import howItWorksBoxArr from "src/constants/AboutUs/HowItWorksBoxArr";

const HowItWorksSection = () => {
  return (
    <>
      <SectionTitle style={{ margin: "3rem 0 2rem 0" }} title="How it works" />
      <div className={styles.howItWorksGridBox}>
        {howItWorksBoxArr.map((boxProps, index) => (
          <HowItWorksBox key={index} {...boxProps} />
        ))}
      </div>
    </>
  );
};

export default HowItWorksSection;
