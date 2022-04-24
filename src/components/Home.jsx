import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import { Hello } from "./Hello";
import { AboutMe } from "./AboutMe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hello />
      <AboutMe />
    </div>
  );
};
export { Home };
