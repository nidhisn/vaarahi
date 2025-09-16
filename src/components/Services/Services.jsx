import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Our Expertise</h2>
      <div>
        <h3>Comprehensive Machinery Solutions</h3>
        <ul>
          <li>
            Wide range of heavy earth moving machinery for mining, crushing, and
            construction.
          </li>
          <li>
            Reliable and high-performance equipment tailored to industry needs.
          </li>
        </ul>
      </div>
      <div>
        <h3>Professional Services</h3>
        <ul>
          <li>
            Expert machinery maintenance ensuring longevity and efficiency.
          </li>
          <li>
            Skilled staff and technicians with extensive industry experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
