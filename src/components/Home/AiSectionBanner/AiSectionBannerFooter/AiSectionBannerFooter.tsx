import Button from "src/common/Button/Button";
import styles from "./AiSectionBannerFooter.module.scss";

const AiSectionBannerFooter = () => (
  <div className={styles.buttonBox} style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
    <Button btnText="About Us" height="3rem" width="12rem" />
  </div>
);

export default AiSectionBannerFooter;
