import React from "react";
import Circuitry from "../../../public/assets/Circuitry/Circuitry";
import UserGear from "../../../public/assets/UserGear/UserGear";
import Table from "../../../public/assets/Table/Table";
import MagnifyingGlass from "../../../public/assets/MagnifyingGlass/MagnifyingGlass";

interface HowItWorksBoxType {
  svg: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

const howItWorksBoxArr: HowItWorksBoxType[] = [
  {
    svg: <MagnifyingGlass />,
    title: "We use AI to deliver instant, accurate readings",
    text: "We use advanced AI technology to interpret your tarot cards and provide you with an accurate reading instantly.",
  },
  {
    svg: <Circuitry />,
    title: "Our AI is trained on thousands of real tarot readings",
    text: "Our AI reader has been trained on thousands of real tarot readings to ensure that it provides accurate and insightful interpretations of your cards.",
  },
  {
    svg: <UserGear />,
    title: "You can choose from a variety of tarot decks",
    text: "We offer a variety of tarot decks for you to choose from, including the classic Rider-Waite deck and modern decks such as the Wild Unknown and the Mystic Mondays.",
  },
  {
    svg: <Table />,
    title: "Our AI reader can answer your questions",
    text: "You can ask our AI reader any question and it will provide you with a detailed interpretation of your cards based on that question.",
  },
];

export default howItWorksBoxArr;
