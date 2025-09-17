"use client";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Chip from "@mui/material/Chip";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <h5 className={styles.sectionTitle}>EXPERIENCE</h5>
      <div className={styles.experienceItemContainer}>
        <p className={styles.experiencePeriod}>
          <span>JULY 2025 &mdash;&nbsp;</span>
          <span>PRESENT</span>
        </p>
        <div className={styles.experienceDescriptionContainer}>
          <p className={styles.experienceTitle}>
            <span>Full-stack Developer &nbsp;·&nbsp; EUVIC S.A</span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.experienceDescriptionText}>
            <span>
              As a Full-stack Developer, I am responsible for designing,
              developing, and maintaining modern web applications with a strong
              focus on performance, scalability, and user experience. On the
              frontend side, I work primarily with React, TypeScript, and modern
              CSS, building reusable components, implementing scalable
              architectures, and ensuring accessibility and cross-browser
              compatibility.
            </span>
            <span>
              On the backend, I leverage Java, Spring Boot, Hibernate, and
              PostgreSQL to design and implement RESTful APIs, manage databases,
              and ensure secure and efficient data flow between systems. I
              collaborate closely with designers, backend/frontend developers,
              and QA teams to deliver end-to-end features within agile sprints.
            </span>
          </p>

          <div className={styles.chipsContainer}>
            {[
              "React",
              "Java",
              "Hibernate",
              "Spring Boot",
              "PostgreSQL",
              "Redux",
              "JavaScript",
              "TypeScript",
              "Git",
              "Fluent UI",
              "Formik",
              "Figma",
            ].map((tech) => (
              <Chip key={tech} className={styles.chip} label={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.experienceItemContainer}>
        <p className={styles.experiencePeriod}>
          <span>JULY 2021&nbsp;&mdash;</span>
          <span>JUNE 2025</span>
        </p>
        <div className={styles.experienceDescriptionContainer}>
          <p className={styles.experienceTitle}>
            <span>Frontend Developer &nbsp;·&nbsp; EUVIC S.A</span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.experienceDescriptionText}>
            As a Frontend Developer, I was responsible for designing,
            developing, and maintaining modern web applications with a focus on
            performance, accessibility, and user experience. I worked primarily
            with technologies such as React, TypeScript, and modern CSS,
            building reusable components and implementing scalable frontend
            architectures. I collaborated closely with backend developers,
            designers, and QA teams to deliver end-to-end features within agile
            sprints. My role involved translating UI/UX designs into
            high-quality code, optimizing applications for cross-browser
            compatibility, and addressing performance bottlenecks. I also
            participated in code reviews, wrote end-to-end tests using Cypress,
            and contributed to improving the development workflow and project
            documentation. This position deepened my understanding of frontend
            best practices and strengthened my ability to build clean,
            maintainable, and efficient codebases in a production environment.
          </p>
          <div className={styles.chipsContainer}>
            {[
              "React",
              "Redux",
              "JavaScript",
              "TypeScript",
              "Git",
              "TanStack Query",
              "SCSS",
              "Cypress",
              "Mui",
              "Fluent UI",
              "React Hook Form",
              "Formik",
              "Figma",
            ].map((tech) => (
              <Chip key={tech} className={styles.chip} label={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.experienceItemContainer}>
        <p className={styles.experiencePeriod}>JUNE 2021</p>
        <div className={styles.experienceDescriptionContainer}>
          <p className={styles.experienceTitle}>
            <span>Frontend Developer, Internship &nbsp;·&nbsp; EUVIC S.A</span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.experienceDescriptionText}>
            During my Frontend Developer internship, I built and improved
            user-facing components with React and TypeScript, implementing
            responsive designs from Figma and ensuring cross-device usability. I
            gained experience with Git, Scrum practices, and code reviews, while
            also learning to debug and optimize applications for performance and
            accessibility. This internship strengthened my technical skills and
            deepened my understanding of frontend workflows.
          </p>
          <div className={styles.chipsContainer}>
            {[
              "React",
              "Redux",
              "JavaScript",
              "TypeScript",
              "HTML & CSS",
              "Git",
            ].map((tech) => (
              <Chip key={tech} className={styles.chip} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
