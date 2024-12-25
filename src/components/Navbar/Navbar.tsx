import React from "react";
import styled from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "src/assets/Logo/Logo";

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
            Readings
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Tarot Readers
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Horoscope
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Blog
          </Link>
          <Link className={styled.navbar__link} href={""}>
            Academy
          </Link>
        </div>

        <div className={styled.navbar__buttons}>
          <Link className={`${styled.navbar__button} ${styled["navbar__button--login"]}`} href={""}>
            Log in
          </Link>
          <Link className={`${styled.navbar__button} ${styled["navbar__button--signup"]}`} href={""}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
