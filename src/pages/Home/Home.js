import React from "react";
import Navigation from "../Shared/Navigation";
import Banner from "./Banner";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
};

export default Home;
