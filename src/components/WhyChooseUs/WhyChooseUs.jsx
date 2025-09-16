import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>🏆</div>
            <h3>Proven Track Record</h3>
            <p>
              Trusted by top leaders in the infrastructure industry. Consistent
              delivery of high-quality productivity and services.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>👨‍💼</div>
            <h3>Experienced Leadership</h3>
            <p>
              Founded by a seasoned expert with 20 years of industry experience
              and a strong family background in civil engineering.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>⚙️</div>
            <h3>Expert Maintenance</h3>
            <p>
              Professional machinery maintenance ensuring longevity and
              efficiency with skilled technicians and extensive industry
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
