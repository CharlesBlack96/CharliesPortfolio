import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import { AboutMe } from "./AboutMe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <div></div>
    </div>
  );
};
export { Home };
