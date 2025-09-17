"use client";

import { useState, useEffect } from "react";
import styles from "./GradientCursor.module.scss";

const GradientCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Delay the initial visibility to avoid flash
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`${styles.gradientCursor} ${isVisible ? styles.visible : ''}`}
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px,rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default GradientCursor;
