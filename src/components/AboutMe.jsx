import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./appStyles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      delete this
      <link to="AboutMe"></link>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <section data-aos="fade-up" className={styles.sectionTwo}>
        <h1 className={styles.aboutMe}>About Me</h1>
        <p className={styles.me}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          asperiores. Nihil, dolorum nostrum facilis dolorem aliquam ex quaerat
          deleniti eius odio id eveniet corrupti et tenetur aliquid ipsum ab!
        </p>
      </section>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};
export { AboutMe };
