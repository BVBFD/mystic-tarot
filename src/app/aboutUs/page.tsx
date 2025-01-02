import MainBanner from "src/components/AboutUs/MainBanner/MainBanner";
import styles from "./page.module.scss";
import HowItWorksSection from "src/components/AboutUs/HowItWorksSection/HowItWorksSection";

const AboutUs = () => {
  return (
    <main className={styles.main}>
      <MainBanner />
      <HowItWorksSection />
    </main>
  );
};

export default AboutUs;
