import Banner from "src/common/Banner/Banner";
import AiSectionBannerFooter from "./AiSectionBannerFooter/AiSectionBannerFooter";

const AiSectionBanner = () => (
  <Banner
    bgImg="/images/home_deck.png"
    footer={<AiSectionBannerFooter />}
    paragraph={
      <>
        <p>Our AI Tarot deck provides instant, accurate readings.</p>
        <p>Explore the technology behind the cards and the science of prediction.</p>
      </>
    }
    title="Explore Our AI Tarot Deck"
  />
);

export default AiSectionBanner;
