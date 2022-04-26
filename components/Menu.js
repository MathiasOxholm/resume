import styles from "../styles/Menu.module.scss";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

const Menu = ({ handleHideMenu }) => {
  // GSAP Animation
  if (typeof window !== "undefined") {
    const tl = gsap.timeline();
  }

  const handleCloseMenu = () => {
    tl.reverse();
    handleHideMenu();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      tl.to("#Menu", {
        scaleY: 1,
        duration: 0.5,
        ease: "power3.easeInOut",
      });

      tl.to(
        "#Overlay",
        {
          opacity: 0.75,
          duration: 0.5,
          ease: "power3.easeInOut",
        },
        "-=0.5"
      );

      tl.to(
        "#nav",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.easeInOut",
        },
        "-=0.25"
      );

      tl.to(
        "#contact",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.easeInOut",
        },
        "-=0.25"
      );
    }
  }, []);

  return (
    <>
      <div
        id="Overlay"
        className={styles.Overlay}
        onClick={handleCloseMenu}
      ></div>
      <div id="Menu" className={styles.Menu}>
        <div className={styles.inner}>
          <nav id="nav" className={styles.navigation}>
            <h2 className="h4">Connect</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/MathiasOxholm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mathiasoxholm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/oxholm.design/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.bottom}>
            <div id="contact" className={styles.list}>
              <ul>
                <li>6000 Kolding</li>
                <li>
                  <a href="mailto:hello@oxholm.dev">hello@oxholm.dev</a>
                </li>
                <li>
                  <a href="tel:+4520316993">+45 20 31 60 93</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
