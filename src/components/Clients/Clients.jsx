import React from "react";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <h2>Our Prestigious Collaborations</h2>
      <p>Companies We Have Worked With:</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          Mega Engineering & Infrastructure Pvt. Ltd
        </div>
        <div className={styles.card}>JSW Steel</div>
        <div className={styles.card}>DPJ Infrastructure Pvt. Ltd</div>
        <div className={styles.card}>KLN Infrastructure Pvt. Ltd</div>
        <div className={styles.card}>Navyug Infrastructure Pvt. Ltd</div>
        <div className={styles.card}>Suryodaya Infrastructure Pvt. Ltd</div>
        <div className={styles.card}>Fomento Resources</div>
        <div className={styles.card}>Horizon Industrial Parks</div>
        <div className={styles.card}>Vedanta Limited</div>
        <div className={styles.card}>SVK Iron Ore Mines</div>
        <div className={styles.card}>KMMI Iron Ore Mines</div>
        <div className={styles.card}>Obulapuram Mining Company</div>
      </div>
    </div>
  );
};

export default Clients;
