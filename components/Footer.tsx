import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.credit}>Made with ❤️ by oxholm.dev</p>
      <a
        href="https://github.com/MathiasOxholm/resume"
        target="_blank"
        className={styles.credit}
        rel="noreferrer"
      >
        Get the code from GitHub
      </a>
    </footer>
  );
};

export default Footer;
