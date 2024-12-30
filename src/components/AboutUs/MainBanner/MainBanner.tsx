import Banner from "src/common/Banner/Banner";
import Button from "src/common/Button/Button";
import styles from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <Banner
      title={"AI-Powered Tarot Readings"}
      paragraph={
        "Experience a new kind of tarot reading, powered by AI. Our technology provides accurate, personalized readings that are designed to help you gain insight and clarity into your life."
      }
      bgImg={"/images/aboutUs_main.png"}
      footer={
        <Button
          href="/aiReadings"
          btnText="Get a Reading"
          fontSize="1rem"
          width="10rem"
          height="3rem"
          style={{ marginTop: "2rem" }}
        />
      }
      className={`${styles.aboutUsMainBanner}`}
    />
  );
};

export default MainBanner;
