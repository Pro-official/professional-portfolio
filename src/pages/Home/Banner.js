import React from "react";
import "./Banner.css";
import me from "../../images/me.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const imgStyle = {
    clipPath: "circle()",
  };

  return (
    <div className="banner">
      <div className="banner-div">
        <div className="banner-name">
          <div className="banner-img">
            <img style={imgStyle} src={me} alt="" />
          </div>
          <h1>Promise Ghosh</h1>
          <br />
          <h1 className="rebel-text">
            Chowdhury <span>.</span>
          </h1>
          {/* <div className="banner-links">
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
          </div> */}
          <Link to="/contact">
            <button className="banner-button">CONTACT ME</button>
          </Link>
        </div>

        <div className="banner-intro">
          <h6>Introduction</h6>
          <h2>Web Developer</h2>
          <p>
            Simplicity is a prerequisite for reliability. Turning my dreams into
            my vision and my visions in reality with tons of codes will make me
            both reliable and simple. I will make your life easier with a great
            website. That's a Promise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
