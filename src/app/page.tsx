import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainImageBox}>
        <div className={styles.mainParagraph}>
          <h1>Welcome to Mystic Tarot</h1>
          <div className={styles.paragraphBox}>
            <p>Discover your future with the world's most trusted tarot readers.</p>
            <p>Get a free reading now.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "48px" }}>
        <h1>What do you want to know?</h1>
        <div className={styles.paragraphBox}>
          <p>Get answers to your most pressing questions with a tarot reading.</p>
          <p>Choose your path to wisdom and empowerment.</p>
        </div>
        <div className={styles.buttonBox} style={{ marginTop: "24px" }}>
          <button>
            <span>Go To AI Readings</span>
          </button>
        </div>
      </div>

      <div style={{ margin: "5rem 0 2rem 0" }}>
        <h2>AI Tarot Reading</h2>
      </div>

      <div className={styles.deckImageBox}>
        <div className={styles.mainParagraph}>
          <h1>Explore Our AI Tarot Deck</h1>
          <div className={styles.paragraphBox}>
            <p>Our AI Tarot deck provides instant, accurate readings.</p>
            <p>Explore the technology behind the cards and the science of prediction.</p>
          </div>
        </div>

        <div className={styles.buttonBox} style={{ marginTop: "24px" }}>
          <button>
            <span>About Us</span>
          </button>
        </div>
      </div>

      <div style={{ margin: "5rem 0 2rem 0" }}>
        <h2>Discover More Infomation about Tarot Deck</h2>
      </div>

      <div className={styles.tarotInfoBox}>
        <label className={styles.univeralWaite}>
          <div className={styles.univeralWaiteImage}>
            <h1>Universal Waite</h1>
            <p>The Universal Waite Tarot deck offers timeless wisdom and clarity for your readings.</p>
          </div>
        </label>

        <label className={styles.horoscopeBelline}>
          <div className={styles.horoscopeBellineImage}>
            <h1>Horoscope Belline</h1>
            <p>The Horoscope Belline Tarot deck provides profound insights and guidance for your spiritual journey.</p>
          </div>
        </label>
      </div>
    </main>
  );
}
