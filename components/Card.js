import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";
import styles from "../styles/Card.module.scss";
import Image from "next/image";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  const Cards = gsap.utils.toArray(".Card");

  Cards.forEach((Card) => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: Card,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

    animateIn.from(Card, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      ease: "expo.Out",
    });
  });
}

const Card = ({ buttonText, text, text2, text3 }) => {
  return (
    <div className={clsx(styles.Card, "Card")}>
      <Image src="/readr.svg" width={144} height={50} alt="Readr logo" />
      <h2>Readr</h2>
      <p>
        {text}{" "}
        <a href="https://getreadr.online" target="_blank" rel="noreferrer">
          getreadr.online
        </a>{" "}
        {text2}{" "}
        <a href="https://readr.online" target="_blank" rel="noreferrer">
          readr.online
        </a>
        . {text3}
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=online.readr.twa"
        className={styles.btn}
        target="_blank"
        rel="noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
