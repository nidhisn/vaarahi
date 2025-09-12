import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Ongoing Projects and Collaborations</h2>
      <div className={styles.card}>
        <h3>CSR Infratech Pvt. Ltd</h3>
        <p>
          <strong>Project Name:</strong> MARAM - PAREN Package - 1A & 1B
        </p>
        <p>
          <strong>Location:</strong> Manipur
        </p>
        <p>
          <strong>Scope of Work:</strong> Crushing for GSB and wet mix.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Nalanda Engicon Pvt. Ltd</h3>
        <p>
          <strong>Project Name:</strong> NH-717 B/PKG – II C/ IIIA
        </p>
        <p>
          <strong>Location:</strong> Sikkim
        </p>
        <p>
          <strong>Scope of Work:</strong> Crushing for wet mix, GSB, and
          aggregates
        </p>
      </div>
      <div className={styles.card}>
        <h3>VPR Infra Engineering</h3>
        <p>
          <strong>Project Name:</strong> Kunta to Dora Nala National Highway
        </p>
        <p>
          <strong>Location:</strong> Andhra Pradesh
        </p>
        <p>
          <strong>Scope of Work:</strong> Drilling, blasting, transporting,
          crushing, and screening of GSB and aggregates
        </p>
      </div>
    </div>
  );
};

export default Projects;
