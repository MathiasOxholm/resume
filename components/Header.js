import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import { useState } from "react";
import styles from "../styles/Header.module.scss";
import Logo from "./svg/Logo";
import Menu from "../components/Menu";
import clsx from "clsx";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.from("#header", {
    y: -100,
    duration: 0.75,
    ease: "power3.Out",
  });
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  let router = useRouter();
  const { locale } = router;
  const localeText = locale === "da" ? "en" : "da";

  // Change language
  const changeLanguage = (e) => {
    const locale = e;
    router.push("/", "/", { locale });
  };

  // Beam me up Scotty
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHideMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 2000);
  };

  return (
    <>
      {showMenu && <Menu handleHideMenu={handleHideMenu} />}
      <div id="header" className={styles.Header}>
        <div id="logo" className={styles.logo} onClick={scrollToTop}>
          <Logo />
        </div>
        <div id="actions" className={styles.actions}>
          <p
            className={styles.locale}
            onClick={() => changeLanguage(localeText)}
          >
            {localeText}
          </p>
          <div
            className={clsx(styles.menuToggle)}
            onClick={handleShowMenu}
            data-active={showMenu ? true : false}
          >
            <span data-number="1"></span>
            <span data-number="2"></span>
            <span data-number="3"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
