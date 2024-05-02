import React from "react";
import fimage from "../../Images/Fundamentals.svg";

const LearnFundamentals = () => {
  return (
    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={fimage} alt="" className="img-fluid" />
          </div>
          <div className="col-md p-5">
            <h2>Learn the fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              in sed voluptatibus quae dolore laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex
              sunt ad dolorem sapiente ducimus quibusdam quaerat officiis
              delectus dignissimos libero quam ipsum quia quidem culpa, dicta,
              repellendus assumenda inventore.
            </p>
            <a href="#" className="btn mt-3">
              <i className="bi bi-chevron-right"></i> Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnFundamentals;
