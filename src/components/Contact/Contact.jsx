import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>
        Get in touch with us for partnerships, project inquiries, or machinery
        rentals.
      </p>
      <div className={styles.info}>
        <address>
          #4015, Swara, 9Main, H Block, Kanakadasa Nagar, Mysore – 570023
        </address>
        <p>
          Email:{" "}
          <a href="mailto:vaarahioverseasmercantile@gmail.com">
            vaarahioverseasmercantile@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+919980547959">+91-9980547959</a>,{" "}
          <a href="tel:+918123557959">+91-8123557959</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
