import styles from "../styles/Card.module.scss";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.Card}>
      <Image src="/readr.svg" width={144} height={50} alt="Readr logo" />
      <h2>Readr</h2>
      <p>
        PWA / TWA bygget med React og Firebase. Læs mere om projektet på{" "}
        <a href="https://getreadr.online" target="_blank" rel="noreferrer">
          getreadr.online
        </a>{" "}
        eller gå direkte til webappen på{" "}
        <a href="https://readr.online" target="_blank" rel="noreferrer">
          readr.online
        </a>
        . Login med Google eller Facebook er påkrævet.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=online.readr.twa"
        className={styles.btn}
        target="_blank"
        rel="noreferrer"
      >
        Åben i Google Play
      </a>
    </div>
  );
};

export default Card;
