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
import ModeratorInfoCard from "../components/ModeratorComponent/ModeratorInfoCard";
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
      <InfoCard
        title="Building an Ecommerce store for a Fashion Company"
        content={`Seeking skilled Video Editors for a project inspired by Alex Hormozi's dynamic style. Edit engaging 60-second videos, infusing creativity while staying true to the distinctive aesthetic. Ideal opportunity for experienced editors or emerging talents to contribute to a unique and impactful series.

If you're passionate about video editing and ready for a creative challenge, submit your portfolio for consideration.

Let's collaborate and bring this vision to life!`}
        days={1}
        people={3}
        points={250}
        money={500}
        languages={["JavaScript", "React", "CSS"]}
      />

      <ModeratorInfoCard
        title={`Very Long Title`}
        content={`I'm a full-stack developer with over 5 years of experience in JavaScript, React, Node.js, and other technologies. I have a strong understanding of software development principles and a passion for learning new technologies.

In my previous role at XYZ Company, I worked on a team to develop a highly scalable web application that served millions of users. I was responsible for designing and implementing key features, as well as troubleshooting and resolving complex technical issues.`}
        aboutMe={`I'm passionate about coding and problem-solving. I enjoy the challenge of breaking down complex problems and finding efficient and effective solutions. In my spare time, I contribute to open-source projects and stay up-to-date with the latest industry trends.`}
        gdriveLink={`https://drive.google.com/drive/folders/1h2jGP7as3hF2o5dKkK9r7SjDk6J3M3vh?usp=sharing`}
        pastProjectsAndCredentials={`I've worked on several notable projects in the past. One of them is a real-time collaboration tool which I developed using React and Firebase. This tool is now used by several organizations for their internal communication.

Credentials:
- Bachelor's degree in Computer Science from ABC University.
- Certified JavaScript Developer from the XYZ Institute.
- Winner of the 123 Coding Challenge in 2020.`}
      />
    </Fragment>
  );
};

export default Home;
