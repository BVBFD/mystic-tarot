import React from "react";
import styles from "./TarotInfoBoxs.module.scss";
import Banner from "src/common/Banner/Banner";

const banners = [
  {
    title: "Universal Waite",
    paragraph: <p>The Universal Waite Tarot deck offers timeless wisdom and clarity for your readings.</p>,
    bgImg: "/images/universal_waite.png",
    height: "300px",
  },
  {
    title: "Horoscope Belline",
    paragraph: (
      <p>The Horoscope Belline Tarot deck provides profound insights and guidance for your spiritual journey.</p>
    ),
    bgImg: "/images/horoscope_belline.png",
    height: "300px",
  },
];

const TarotInfoBoxs = () => {
  return (
    <div className={styles.tarotInfoBoxs}>
      {banners.map((banner, index) => (
        <Banner
          key={index}
          title={banner.title}
          paragraph={banner.paragraph}
          bgImg={banner.bgImg}
          height={banner.height}
        />
      ))}
    </div>
  );
};

export default TarotInfoBoxs;
