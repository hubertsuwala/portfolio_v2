import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link
        href="https://github.com/hubertsuwala"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <GitHubIcon className={styles.muiIcon} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/hsuwala"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <LinkedInIcon className={styles.muiIcon} />
      </Link>
    </footer>
  );
};

export default Footer;
