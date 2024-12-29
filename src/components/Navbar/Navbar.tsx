import React from "react";
import styled from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "../../../public/assets/Logo/Logo";
import Button from "src/common/Button/Button";

const Navbar = () => {
  return (
    <header className={styled.navbar}>
      <div className={styled.navbar__left}>
        <Logo />
        <h2 className={styled.navbar__title}>Mystic Tarot</h2>
      </div>

      <div className={styled.navbar__right}>
        <div className={styled.navbar__links}>
          <Link className={styled.navbar__link} href={""}>
            Home
          </Link>
          <Link className={styled.navbar__link} href={""}>
            About Us
          </Link>
          <Link className={styled.navbar__link} href={""}>
            AI Readings
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Universal Waite
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Horoscope Belline
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Contact
          </Link>
        </div>

        <div className={styled.navbar__buttons}>
          <Button btnText="Log in" />
          <Button btnText="Sign up" bgColor="var(--button-bg-secondary-color)" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
