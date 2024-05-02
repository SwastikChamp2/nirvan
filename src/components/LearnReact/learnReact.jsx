import React from "react";
import reactimage from "../../Images/learnReact.svg";
import { useNavigate } from "react-router-dom";

const LearnReact = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/react-opportunities");
  };

  return (
    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
            <p className="lead">
              Unlock the power of React and take your web development skills to
              the next level with our comprehensive gig platform.
            </p>
            <p>
              Whether you're a buyer looking for top-notch React developers or a
              or a freelancer ,offering your expertise, our platform has
              something for everyone. Buyers can post their requirements and
              find talented developers to bring their ideas to life, while
              freelancers can showcase their skills and land lucrative gigs.
            </p>
            <a
              onClick={() => navigate("/login")}
              className="btn btn-light mt-3"
              // onClick={handleExploreClick}
            >
              <i className="bi bi-chevron-right"></i> Explore React
              Opportunities
            </a>
          </div>
          <div className="col-md">
            <img src={reactimage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnReact;
