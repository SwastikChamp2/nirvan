import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import LearnFundamentals from "../components/LearnFundamentals/learnFundamentals";
import LearnReact from "../components/LearnReact/learnReact";
import FAQSection from "../components/FAQComponent/faq";
const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "fiction" || item.category === "non-fiction"
  );
  const bestSales = products.filter((item) => item.category === "study-books");
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
