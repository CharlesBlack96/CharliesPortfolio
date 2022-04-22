import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./appStyles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hello = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <section className={styles.sectionOne}>
        <h1 className={styles.hiMyName}>
          Hi, my name is Charles Black, front end web Developer
        </h1>
        <img
          class={styles.profilePic2}
          src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
          alt="White cat with black background"
        />
      </section>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};
export { Hello };
