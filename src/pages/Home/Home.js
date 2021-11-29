import React from "react";
import Navigation from "../Shared/Navigation";
import Banner from "./Banner";
import Projects from "./projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
