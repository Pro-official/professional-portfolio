import React from "react";
import "./Banner.css";
import me from "../../images/me2.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-div">
        <div className="banner-name">
          <h1>Promise Ghosh</h1>
          <br />
          <h1 className="rebel-text">
            Chowdhury <span>.</span>
          </h1>
          <hr />
          <div className="banner-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/promise-ghosh-chowdhury/"
            >
              Linkedin
            </a>{" "}
            &nbsp; |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="right-links"
              href="https://github.com/pro-official"
            >
              &nbsp; GitHub
            </a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/promise.great00/"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="right-link"
              href="https://twitter.com/ProOfficial00"
            >
              &nbsp; Twitter
            </a>
          </div>
          <button className="banner-button">CONTACT ME</button>
        </div>
        <div className="banner-img">
          <img src={me} alt="" />
        </div>
        <div className="banner-intro">
          <h6>Introduction</h6>
          <h2>Web Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolorem odit sint voluptate modi ipsum velit omnis. Eaque, dolores
            consequatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
