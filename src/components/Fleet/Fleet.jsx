import React from "react";
import styles from "./Fleet.module.css";

const Fleet = () => {
  return (
    <div className={styles.fleet}>
      <h2>Machinery Overview</h2>
      <ul>
        <li>Terex XA 400 Jaw Crusher: 2 No’s</li>
        <li>Terex 1000 Maxtrak: 2 No’s</li>
        <li>Terex 1000 SR Cone Crusher: 2 No’s</li>
        <li>Terex 900x600 Jaw Crusher: 2 No’s</li>
        <li>10 Wheel Hyva Tippers: 8 No’s</li>
        <li>Excavator 200 Capacity: 3 No’s</li>
        <li>Loaders: 2 No’s</li>
        <li>Mobile Screener (Triple Deck): 1 No’s</li>
        <li>Mobile Screener (Two Deck): 1 No’s</li>
      </ul>
    </div>
  );
};

export default Fleet;
