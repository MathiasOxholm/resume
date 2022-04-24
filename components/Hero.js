import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import ListItem from "./ListItem";
import Instagram from "../components/svg/Instagram";
import Github from "../components/svg/Github";
import LinkedIn from "../components/svg/LinkedIn";

const Hero = () => {
  return (
    <div id="Hero" className={styles.Hero}>
      <h1 className={styles.title}>
        frontend udvikler med 3 års erfaring i specialudvikling af websites,
        -shops og -apps.
      </h1>

      <div className={styles.row}>
        <div className={styles.featuredImage}>
          <Image
            src="/oxholm-cv-profil.jpg"
            width={270}
            height={420}
            alt="Mathias Oxholm Profilbillede"
            layout="responsive"
          />
        </div>
        <div className={styles.about}>
          <div className={styles.inner}>
            <h2 className="h3">Kort fortalt</h2>
            <p className={styles.description}>
              Færdiguddannet Professionsbachelor i International Webudvikling
              (Formidling og design) på IBA Erhvervsakademi Kolding. Jeg
              arbejder pt som Frontend udvikler hos Superego i Horsens. <br />{" "}
              <br /> Midt i en overgangsperiode mellem PHP til JS. Specifikt
              udforsker jeg React / Next.js og finder det betydelig federe end
              WordPress, PHP og jQuery. Med andre ord:{" "}
              <b>Jeg går aldrig tilbage og søger derfor nye udfordringer.</b>
            </p>
          </div>
          <div className={styles.info}>
            <h2 className="h3">Info</h2>
            <ListItem title="Alder" body="31 / 05 / 1995" />
            <ListItem
              title="Telefon"
              body="+45 20 31 60 93"
              href="tel:+4520316993"
            />
            <ListItem
              title="Email"
              body="hello@mathiasoxholm.dk"
              href="mailto:hello@mathiasoxholm.dk"
            />
            <ListItem title="Adresse" body="6000 Kolding" />
            <ListItem title="Connect">
              <Github />
              <LinkedIn />
              <Instagram />
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
