import Link from "next/link";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h5 className={styles.sectionTitle}>ABOUT</h5>
      <p className={styles.paragraph}>
        I&apos;m a fullstack developer specializing in building modern web
        applications with <span className={styles.boldColor}>React</span> and
        <span className={styles.boldColor}> Java. </span>
        Over the past few years at
        <Link
          href="https://www.euvic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.boldColor}> EUVIC S.A. </span>
        </Link>{" "}
        , I&apos;ve worked across projects in healthcare, accounting, and public
        administration (including systems for managing radio frequency
        registrations).
      </p>

      <p className={styles.paragraph}>
        My toolkit includes{" "}
        <span className={styles.boldColor}>
          {" "}
          React, Java, Spring Boot, Hibernate, PostgreSQL, MUI, Fluent UI, React
          Hook Form, Formik, and Cypress
        </span>{" "}
        , which I use to create reliable, scalable, and user-friendly solutions.
        I started my career as a frontend intern in 2021, grew into a frontend
        developer role, and since 2025 I&apos;ve been working as a fullstack
        developer, bridging both client and server-side challenges.
      </p>
      <p className={styles.paragraph}>
        What drives me is{" "}
        <span className={styles.boldColor}>
          openness to new technologies, collaboration, and an easy-going
          attitude
        </span>{" "}
        that helps me connect with people and teams. I enjoy learning, sharing
        knowledge, and constantly finding better ways to solve problems.
      </p>
      <p className={styles.paragraph}>
        Outside of work, you&apos;ll most likely find me hiking, cycling,
        running, or snowboarding—I love staying active and exploring the
        outdoors.
      </p>
    </section>
  );
}
