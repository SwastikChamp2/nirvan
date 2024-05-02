import React from "react";
import InfoCard from "../components/ComponentCard/InfoCard";

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <InfoCard
          title="Building an Ecommerce store for a Fashion Company"
          content={`Seeking skilled Video Editors for a project inspired by Alex Hormozi's dynamic style. Edit engaging 60-second videos, infusing creativity while staying true to the distinctive aesthetic. Ideal opportunity for experienced editors or emerging talents to contribute to a unique and impactful series.

If you're passionate about video editing and ready for a creative challenge, submit your portfolio for consideration.

Let's collaborate and bring this vision to life!`}
        />
      </div>
    );
  }
}

export default TestComponent;
