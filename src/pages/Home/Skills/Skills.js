import React from "react";
import "./Skills.css";
import {
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialui,
  SiBootstrap,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { Container } from "react-bootstrap";
// import DiJavascript1 from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-intro">
        <h6>SKILLS</h6>
        <h2>What I Am Good At</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          beatae vitae alias unde laborum est placeat cupiditate eligendi dolor
          reiciendis!
        </p>
      </div>
      <Container>
        <div className="card">
          <div className="skill-card">
            <div className="inside">
              <DiJavascript1 className="icon"></DiJavascript1>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>Javascript</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <FaReact className="icon"></FaReact>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>ReactJs</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiNodedotjs className="icon"></SiNodedotjs>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>NodeJs</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiMongodb className="icon"></SiMongodb>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>MongoDB</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiFirebase className="icon"></SiFirebase>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>Firebase</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiHtml5 className="icon"></SiHtml5>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>HTML5</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiCss3 className="icon"></SiCss3>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>CSS3</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiTailwindcss className="icon"></SiTailwindcss>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>Tailwind Css</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiMaterialui className="icon"></SiMaterialui>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>Material UI</h4>
            </div>
          </div>
          <div className="skill-card">
            <div className="inside">
              <SiBootstrap className="icon"></SiBootstrap>
              {/* <DiJavascript1></DiJavascript1> */}
              <h4>React Bootstrap</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
