import React from "react";
import "./projects.css";
import project1 from "../../../images/project1.png";
// import project2 from "../../../images/project2.png";
// import project3 from "../../../images/project3.png";

const projects = () => {
  return (
    <div className="projects">
      <div className="projects-intro">
        <h6>PROJECTS</h6>
        <h2>My Latest Projects</h2>
      </div>
      <div className="my-cards">
        <div className="project-cards">
          <div className="project-img">
            <img src={project1} alt="" />
          </div>
          <div className="project-details">
            <div className="details-text">
              <h2>Cycle of Pro</h2>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, enim.
              </h6>
              <button className="project-button ">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
