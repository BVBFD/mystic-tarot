import Banner from "src/common/Banner/Banner";
import AiSectionBannerFooter from "./AiSectionBannerFooter/AiSectionBannerFooter";

const AiSectionBanner = () => (
  <Banner
    title="Explore Our AI Tarot Deck"
    paragraph={
      <>
        <p>Our AI Tarot deck provides instant, accurate readings.</p>
        <p>Explore the technology behind the cards and the science of prediction.</p>
      </>
    }
    bgImg="/images/home_deck.png"
    footer={<AiSectionBannerFooter />}
  />
);

export default AiSectionBanner;
