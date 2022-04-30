import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.credit}>Made with ❤️ by oxholm.dev</p>
      <p className={styles.credit}>Get the code from GitHub</p>
    </footer>
  );
};

export default Footer;
