import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./appStyles.module.css";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { Hello } from "./Hello";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
const Navbar = () => {
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.profilePic}
          src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
          alt="White cat with black background"
        />
        <ul className={styles.navbarLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <Link to="/contact">
          <button class={styles.contact}>Contact</button>
        </Link>
      </header>
      <div></div>
    </div>
  );
};
export { Navbar };
