import Banner from "src/common/Banner/Banner";
import Button from "src/common/Button/Button";
import styles from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <Banner
      bgImg={"/images/aboutUs_main.png"}
      className={`${styles.aboutUsMainBanner}`}
      footer={
        <Button
          btnText="Get a Reading"
          fontSize="1rem"
          height="3rem"
          href="/aiReadings"
          style={{ marginTop: "2rem" }}
          width="10rem"
        />
      }
      paragraph={
        "Experience a new kind of tarot reading, powered by AI. Our technology provides accurate, personalized readings that are designed to help you gain insight and clarity into your life."
      }
      title={"AI-Powered Tarot Readings"}
    />
  );
};

export default MainBanner;
