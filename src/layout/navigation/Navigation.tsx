"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.scss";

interface NavigationProps {
  currentPage?: "home" | "about" | "experience" | "projects";
}

const Navigation = ({}: NavigationProps) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ["about", "experience", "projects"];

    const checkActive = () => {
      const currentHash = window.location.hash.replace("#", "");

      let newActive = currentHash;

      for (let i = 0; i < sections.length; i++) {
        const id = sections[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (id === "projects") {
            const isNearBottom =
              window.innerHeight + window.scrollY >=
              document.body.offsetHeight - 200;

            if (rect.top <= 300 || isNearBottom) {
              newActive = id;
            }
          } else {
            if (rect.top <= 120 && rect.bottom >= 120) {
              newActive = id;
            }
          }
        }
      }

      setActive(newActive);
    };

    window.addEventListener("scroll", checkActive);
    window.addEventListener("hashchange", checkActive);

    checkActive();

    return () => {
      window.removeEventListener("scroll", checkActive);
      window.removeEventListener("hashchange", checkActive);
    };
  }, []);

  return (
    <header>
      <h1 className={styles.title}>Hubert Suwala</h1>
      <h3 className={styles.subTitle}>Full-stack Developer</h3>
      <p className={styles.description}>
        I craft full-stack web applications, delivering both intuitive user
        interfaces and powerful server-side functionality
      </p>
      <nav className={styles.navContainer}>
        <Link
          href="#about"
          className={`${styles.navLink} ${
            active === "about" ? styles.active : ""
          }`}
        >
          About
        </Link>
        <Link
          href="#experience"
          className={`${styles.navLink} ${
            active === "experience" ? styles.active : ""
          }`}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className={`${styles.navLink} ${
            active === "projects" ? styles.active : ""
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
