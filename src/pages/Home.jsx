import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";

import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import LearnFundamentals from "../components/LearnFundamentals/learnFundamentals";
import LearnReact from "../components/LearnReact/learnReact";
import FAQSection from "../components/FAQComponent/faq";
import InfoCard from "../components/ComponentCard/InfoCard";
import ModeratorInfoCard from "../components/ModeratorComponent/ModeratorInfoCard";
const Home = () => {
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />

      <Wrapper />
      <LearnFundamentals />
      <LearnReact />
      <FAQSection />
    </Fragment>
  );
};

export default Home;
