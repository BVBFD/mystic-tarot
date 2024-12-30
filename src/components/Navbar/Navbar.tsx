import styles from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "../../../public/assets/Logo/Logo";
import Button from "src/common/Button/Button";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Logo />
        <h2 className={styles.navbar__title}>Mystic Tarot</h2>
      </div>

      <div className={styles.navbar__right}>
        <div className={styles.navbar__links}>
          <Link className={styles.navbar__link} href={"/"}>
            Home
          </Link>
          <Link className={styles.navbar__link} href={"/aboutUs"}>
            About Us
          </Link>
          <Link className={styles.navbar__link} href={"/aiReadings"}>
            AI Readings
          </Link>
          <Link className={styles.navbar__link} href={"/universalWaite"}>
            Universal Waite
          </Link>
          <Link className={styles.navbar__link} href={"/horoscopeBelline"}>
            Horoscope Belline
          </Link>
          <Link className={styles.navbar__link} href={"/contact"}>
            Contact
          </Link>
        </div>

        <div className={styles.navbar__buttons}>
          <Button btnText="Log in" />
          <Button bgColor="var(--button-bg-secondary-color)" btnText="Sign up" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
