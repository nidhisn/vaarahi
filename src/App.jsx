import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Fleet from "./components/Fleet/Fleet";
import Clients from "./components/Clients/Clients";
import Projects from "./components/Projects/Projects";
import Leadership from "./components/Leadership/Leadership";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="fleet">
        <Fleet />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
