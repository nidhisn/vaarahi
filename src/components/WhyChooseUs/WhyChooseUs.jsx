import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title on scroll
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate cards with stagger effect
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        {
          y: 150,
          opacity: 0,
          scale: 0.8,
          rotationX: 45,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animations for cards
      cards.forEach((card) => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl
          .to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            card.querySelector(`.${styles.icon}`),
            {
              rotation: 360,
              duration: 0.6,
              ease: "power2.out",
            },
            0
          );

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Why Choose Us?
        </h2>
        <div ref={cardsRef} className={styles.cards}>
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

