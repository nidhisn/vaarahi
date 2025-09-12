import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Vaarahi Overseas Mercantile</h2>
        <p className={styles.lead}>
          Vaarahi Overseas Mercantile is a premier provider of heavy earth
          moving machinery and professional services tailored for the
          infrastructure, mining, and construction industries.
        </p>
        <p className={styles.copy}>
          Originally established as Shree Equipment's, we have rebranded to
          reflect our expanded capabilities and commitment to excellence. At
          Vaarahi Overseas Mercantile, we are dedicated to driving innovation
          and excellence in every project.
        </p>
        <p className={styles.copy}>
          Our mission is to provide top-tier machinery and services, ensuring
          our clients achieve their goals with efficiency and reliability.
        </p>
      </div>
    </section>
  );
};

export default About;
