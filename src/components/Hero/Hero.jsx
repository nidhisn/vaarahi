import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";
import bulldozer from "../../images/bulldozer.png";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const taglinesRef = useRef(null);
  const dozerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const letters = titleRef.current.querySelectorAll(`.${styles.letter}`);
    // Entrance animations removed per request; animations now only occur on scroll

    // 3) On scroll, collapse both title and taglines, then sweep the bulldozer across while scaling up
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(taglinesRef.current.children, {
      y: 80,
      opacity: 0,
      rotateX: 90,
      transformOrigin: "top center",
      stagger: 0.06,
      ease: "back.in(1.4)",
      duration: 0.6,
    })
      .to(
        letters,
        {
          y: () => 250 + Math.random() * 120,
          x: () => -250 + Math.random() * 500,
          opacity: 1,
          rotateZ: () => -40 + Math.random() * 80,
          stagger: 0.02,
          duration: 1.0,
          ease: "bounce.out",
        },
        "<0.1"
      )
      .fromTo(
        dozerRef.current,
        { x: "-160%", scale: 1.0, rotate: 0 },
        {
          x: "130%",
          scale: 2.8,
          rotate: -3,
          ease: "power2.inOut",
          duration: 3.2,
        }
      );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.hero}>
      <h1 ref={titleRef} className={styles.title}>
        <span className={styles.line}>
          {"VAARAHI".split("").map((char, i) => (
            <span key={`v-${i}`} className={styles.letter}>
              {char}
            </span>
          ))}
        </span>
        <span className={styles.line}>
          {"OVERSEAS MERCANTILE".split("").map((char, i) => (
            <span key={`om-${i}`} className={styles.letter}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </h1>
      <div ref={taglinesRef} className={styles.taglines}>
        <p>Heavy Earth Moving Machinery • Global Sourcing • Reliable Service</p>
        <p>Infrastructure • Mining • Construction</p>
        <p>Innovation, Safety, Excellence</p>
      </div>
      <img
        ref={dozerRef}
        src={bulldozer}
        alt="Bulldozer"
        className={styles.dozer}
      />
    </div>
  );
};

export default Hero;
