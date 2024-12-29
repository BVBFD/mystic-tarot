import styles from "./MainBanner.module.scss";
import Banner from "src/common/Banner/Banner";
import Button from "src/common/Button/Button";

const MainBanner = () => (
  <section className={styles.mainBannerSection}>
    <Banner
      title="Welcome to Mystic Tarot"
      paragraph={
        <>
          <p>Discover your future with the world's most trusted tarot readers.</p>
          <p>Get a free reading now.</p>
        </>
      }
      bgImg="/images/home_main.png"
    />

    <div className={styles.mainBannerSectionContent}>
      <h1>What do you want to know?</h1>
      <div>
        <p>Get answers to your most pressing questions with a tarot reading.</p>
        <p>Choose your path to wisdom and empowerment.</p>
      </div>
      <div className={styles.btnBox}>
        <Button btnText="Go To AI Readings" width="12rem" height="3rem" />
      </div>
    </div>
  </section>
);

export default MainBanner;
