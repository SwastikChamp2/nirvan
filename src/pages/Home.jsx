import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import LearnFundamentals from "../components/LearnFundamentals/learnFundamentals";
import LearnReact from "../components/LearnReact/learnReact";
import FAQSection from "../components/FAQComponent/faq";
import InfoCard from "../components/ComponentCard/InfoCard";
const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "fiction" || item.category === "non-fiction"
  );
  const bestSales = products.filter((item) => item.category === "study-books");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      {/* <Wrapper />
      <LearnFundamentals />
      <LearnReact />
      <FAQSection /> */}
      <InfoCard
        title="Building an Ecommerce store for a Fashion Company"
        content={`Seeking skilled Video Editors for a project inspired by Alex Hormozi's dynamic style. Edit engaging 60-second videos, infusing creativity while staying true to the distinctive aesthetic. Ideal opportunity for experienced editors or emerging talents to contribute to a unique and impactful series.

If you're passionate about video editing and ready for a creative challenge, submit your portfolio for consideration.

Let's collaborate and bring this vision to life!`}
        days={1}
        people={3}
        points={250}
      />
    </Fragment>
  );
};

export default Home;
