import React from "react";
import styles from "./Leadership.module.css";

const Leadership = () => {
  return (
    <div className={styles.leadership}>
      <h2>Leadership</h2>
      <p>
        Vaarahi Overseas is guided by experienced leadership with a clear vision
        to deliver excellence in heavy machinery services.
      </p>
      <div className={styles.team}>
        <div className={styles.member}>
          <h3>Mr. S Nidhi</h3>
          <p>Founder & CEO</p>
        </div>
        <div className={styles.member}>
          <h3>Mr. XYZ</h3>
          <p>Director of Operations</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
