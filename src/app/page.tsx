import styles from "./page.module.scss";
import TarotInfoBoxs from "src/components/Home/TarotInfoBoxs/TarotInfoBoxs";
import SectionTitle from "src/common/SectionTitle/SectionTitle";
import MainBanner from "src/components/Home/MainBanner/MainBanner";
import AiSectionBanner from "src/components/Home/AiSectionBanner/AiSectionBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainBanner />
      <SectionTitle title="AI Tarot Reading" />
      <AiSectionBanner />
      <SectionTitle title="Discover More Infomation about Tarot Deck" />
      <TarotInfoBoxs />
    </main>
  );
}
