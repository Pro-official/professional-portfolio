import React, { useEffect, useState } from "react";
import Project from "./Project";
import "./projects.css";

const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="projects">
      <div className="projects-intro">
        <h6>PROJECTS</h6>
        <h2>My Latest Projects</h2>
      </div>
      <div className="project-div g-4">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
