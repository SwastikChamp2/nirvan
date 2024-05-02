import React from "react";
import reactimage from "../../Images/learnReact.svg";

const LearnReact = () => {
  return (
    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
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
            <a href="#" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Learn More
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
