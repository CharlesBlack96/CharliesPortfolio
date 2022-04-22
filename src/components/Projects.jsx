import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./appStyles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head> */}
      <Navbar />
      <div className={styles.sideColor}>
        <section className={styles.sectionThree}>
          <h1 data-aos="fade-up" className={styles.projects}>
            Projects
          </h1>
          <h2 className={styles.projectPics}>
            <div className={styles.projectwText}>
              <img
                data-aos="fade-right"
                className={styles.project}
                src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
                alt="White cat with black background"
              />
              <p className={styles.projectText}>
                This is the Text for project one
              </p>
            </div>
            <div className={styles.projectwText}>
              <img
                data-aos="fade-up"
                className={styles.project}
                src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
                alt="white cat with black background"
              />
              <p className={styles.projectText}>
                This is the text for project Two
              </p>
            </div>
            <div className={styles.projectwText}>
              <img
                data-aos="fade-left"
                class={styles.project}
                src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
                alt="White cat with black background"
              />
              <p className={styles.projectText}>
                This is the text for project Three
              </p>
            </div>
          </h2>
        </section>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </div>
    </div>
  );
};

export { Projects };
