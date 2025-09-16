import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import styles from "./FallingText.module.css";

const FallingText = ({
  text,
  highlightWords = [],
  highlightClass = "highlighted",
  trigger = "hover",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.56,
  fontSize = "2rem",
  mouseConstraintStiffness = 0.9,
}) => {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const worldRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create engine
    const engine = Matter.Engine.create();
    engine.world.gravity.y = gravity;
    engineRef.current = engine;

    // Create renderer
    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
        wireframes: wireframes,
        background: backgroundColor,
        showAngleIndicator: false,
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false,
        showDebug: false,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    renderRef.current = render;

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: {
          visible: false,
        },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Create text bodies
    const createTextBodies = () => {
      const words = text.split(" ");
      const bodies = [];

      words.forEach((word, wordIndex) => {
        const isHighlighted = highlightWords.includes(word);
        const wordElement = document.createElement("div");
        wordElement.textContent = word;
        wordElement.style.fontSize = fontSize;
        wordElement.style.fontWeight = isHighlighted ? "bold" : "normal";
        wordElement.style.color = isHighlighted ? "#ff6b6b" : "#333";
        wordElement.style.position = "absolute";
        wordElement.style.pointerEvents = "none";
        wordElement.style.userSelect = "none";
        wordElement.className = isHighlighted ? highlightClass : "";

        // Measure text dimensions
        document.body.appendChild(wordElement);
        const rect = wordElement.getBoundingClientRect();
        document.body.removeChild(wordElement);

        const width = rect.width;
        const height = rect.height;

        // Create Matter.js body
        const body = Matter.Bodies.rectangle(
          Math.random() * (containerRef.current.offsetWidth - width),
          -height - wordIndex * 50,
          width,
          height,
          {
            render: {
              fillStyle: "transparent",
              strokeStyle: "transparent",
            },
          }
        );

        // Store reference to word element
        body.wordElement = wordElement;
        body.wordElement.style.left = `${body.position.x - width / 2}px`;
        body.wordElement.style.top = `${body.position.y - height / 2}px`;

        bodies.push(body);
        containerRef.current.appendChild(wordElement);
      });

      return bodies;
    };

    const bodies = createTextBodies();
    Matter.World.add(engine.world, bodies);

    // Add walls
    const wallThickness = 20;
    const walls = [
      // Bottom wall
      Matter.Bodies.rectangle(
        containerRef.current.offsetWidth / 2,
        containerRef.current.offsetHeight + wallThickness / 2,
        containerRef.current.offsetWidth,
        wallThickness,
        { isStatic: true, render: { fillStyle: "transparent" } }
      ),
      // Left wall
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerRef.current.offsetHeight / 2,
        wallThickness,
        containerRef.current.offsetHeight,
        { isStatic: true, render: { fillStyle: "transparent" } }
      ),
      // Right wall
      Matter.Bodies.rectangle(
        containerRef.current.offsetWidth + wallThickness / 2,
        containerRef.current.offsetHeight / 2,
        wallThickness,
        containerRef.current.offsetHeight,
        { isStatic: true, render: { fillStyle: "transparent" } }
      ),
    ];

    Matter.World.add(engine.world, walls);

    // Animation loop
    const updatePositions = () => {
      bodies.forEach((body) => {
        if (body.wordElement) {
          body.wordElement.style.left = `${
            body.position.x - body.wordElement.offsetWidth / 2
          }px`;
          body.wordElement.style.top = `${
            body.position.y - body.wordElement.offsetHeight / 2
          }px`;
          body.wordElement.style.transform = `rotate(${body.angle}rad)`;
        }
      });
    };

    const animate = () => {
      Matter.Engine.update(engine);
      updatePositions();
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle trigger
    const handleTrigger = () => {
      if (trigger === "hover") {
        setIsHovered(true);
        if (!isTriggered) {
          setIsTriggered(true);
          // Reset positions and restart animation
          bodies.forEach((body, index) => {
            Matter.Body.setPosition(body, {
              x: Math.random() * (containerRef.current.offsetWidth - 100),
              y: -50 - index * 30,
            });
            Matter.Body.setVelocity(body, { x: 0, y: 0 });
            Matter.Body.setAngularVelocity(body, 0);
          });
        }
      } else if (trigger === "click") {
        setIsTriggered(!isTriggered);
        if (!isTriggered) {
          // Reset positions and restart animation
          bodies.forEach((body, index) => {
            Matter.Body.setPosition(body, {
              x: Math.random() * (containerRef.current.offsetWidth - 100),
              y: -50 - index * 30,
            });
            Matter.Body.setVelocity(body, { x: 0, y: 0 });
            Matter.Body.setAngularVelocity(body, 0);
          });
        }
      }
    };

    const container = containerRef.current;
    if (trigger === "hover") {
      container.addEventListener("mouseenter", handleTrigger);
    } else if (trigger === "click") {
      container.addEventListener("click", handleTrigger);
    }

    // Cleanup
    return () => {
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        Matter.Render.stop(renderRef.current);
      }
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
      if (container) {
        container.removeEventListener("mouseenter", handleTrigger);
        container.removeEventListener("click", handleTrigger);
      }
      // Clean up DOM elements
      bodies.forEach((body) => {
        if (body.wordElement && body.wordElement.parentNode) {
          body.wordElement.parentNode.removeChild(body.wordElement);
        }
      });
    };
  }, [
    text,
    highlightWords,
    highlightClass,
    trigger,
    backgroundColor,
    wireframes,
    gravity,
    fontSize,
    mouseConstraintStiffness,
    isTriggered,
  ]);

  return (
    <div
      ref={containerRef}
      className={styles.fallingTextContainer}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        cursor: trigger === "click" ? "pointer" : "default",
      }}
    />
  );
};

export default FallingText;
