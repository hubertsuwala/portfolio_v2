import styles from "./projects.module.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import mindAppImage from "../../assets/MIND_APP.png";
import cashcloud from "../../assets/Cashcloud.png";
import rat from "../../assets/RAT.png";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h5 className={styles.sectionTitle}>PROJECTS</h5>
      <Link
        href="https://www.euvic.at/mindnew"
        target="_blank"
        className={styles.projectItemContainer}
      >
        <Image
          className={styles.projectImage}
          alt="MIND_APP picture"
          src={mindAppImage}
          loading="lazy"
        />

        <div className={styles.projectDescriptionContainer}>
          <p className={styles.projectTitle}>
            <span>MIND New </span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.projectDescriptionText}>
            <span>
              The MIND New project by Euvic Austria is an all-in-one digital
              platform for the healthcare and nursing sector, designed for both
              home care and stationary care providers.
            </span>
          </p>
        </div>
      </Link>

      <Link
        href="https://www.cashcloud.pl/"
        target="_blank"
        className={styles.projectItemContainer}
      >
        <Image
          className={styles.projectImage}
          alt="cashcloud picture"
          src={cashcloud}
          loading="lazy"
        />

        <div className={styles.projectDescriptionContainer}>
          <p className={styles.projectTitle}>
            <span>Cashcloud app </span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.projectDescriptionText}>
            <span>
              Digital platform designed mainly for small and medium-sized
              businesses. It helps entrepreneurs streamline financial
              management, accounting, and collaboration with accountants.
            </span>
          </p>
        </div>
      </Link>
      <Link
        href="https://rat.gv.at/"
        target="_blank"
        className={styles.projectItemContainer}
      >
        <Image
          className={styles.projectImage}
          alt="Radio Administration Tool picture"
          src={rat}
          loading="lazy"
        />

        <div className={styles.projectDescriptionContainer}>
          <p className={styles.projectTitle}>
            <span>RAT - Radio Administration Tool </span>
            <ArrowOutwardIcon className={styles.muiIcon} />
          </p>
          <p className={styles.projectDescriptionText}>
            <span>
              RAT - Radio Administration Tool, a new digital platform introduced
              by the Austrian Fernmeldebüro (Telecommunications Authority). It
              is designed for handling administrative procedures related to
              radio communication in Austria.
            </span>
          </p>
        </div>
      </Link>
    </section>
  );
};
export default Projects;
