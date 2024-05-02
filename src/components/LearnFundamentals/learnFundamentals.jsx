import React from "react";
import fimage from "../../Images/Fundamentals.svg";
import { useNavigate } from "react-router-dom";

const LearnFundamentals = () => {
  const navigate = useNavigate();

  return (
    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={fimage} alt="" className="img-fluid" />
          </div>
          <div className="col-md p-5">
            <h2>Learn the Fundamentals</h2>
            <p className="lead">
              Lay a solid foundation for your programming journey with our
              comprehensive projects.
            </p>
            <p>
              Whether you're a beginner looking to kickstart your career or an
              experienced developer seeking to solidify your skills, our
              platform offers a wide range of courses and gigs focused on
              fundamental programming concepts. People can post their requests
              or requirements, while sellers can easily get started without any
              any cost at their end.
            </p>
            <a
              href="#"
              className="btn btn-primary mt-3"
              onClick={() => navigate("/login")}
            >
              <i className="bi bi-chevron-right"></i> Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnFundamentals;
