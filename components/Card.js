import styles from "../styles/Card.module.scss";
import Image from "next/image";

const Card = ({ buttonText, text, text2, text3 }) => {
  return (
    <div className={styles.Card}>
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
