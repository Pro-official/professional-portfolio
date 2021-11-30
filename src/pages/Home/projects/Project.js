import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { name, description, img, id } = project;
  return (
    <div className="column">
      <div className="project-card">
        <img src={img} className="card-img" alt="project" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link to={`details/${id}`}>
            <button className="project-button">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
