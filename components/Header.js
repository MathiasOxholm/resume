import styles from "../styles/Header.module.scss";
import Logo from "./svg/Logo";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.Header}>
      <div className={styles.logo} onClick={scrollToTop}>
        <Logo />
      </div>
      <div className={styles.menuToggle}>
        <span data-number="1"></span>
        <span data-number="2"></span>
        <span data-number="3"></span>
      </div>
    </div>
  );
};

export default Header;
