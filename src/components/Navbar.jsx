import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./appStyles.module.css";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { Hello } from "./Hello";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
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
