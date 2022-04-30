import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import ListItem from "./ListItem";
import Instagram from "../components/svg/Instagram";
import Github from "../components/svg/Github";
import LinkedIn from "../components/svg/LinkedIn";
import { gsap } from "gsap/dist/gsap";

// GSAP Animation
if (typeof window !== "undefined") {
  const heroTL = gsap.timeline();

  heroTL
    .from("#before", {
      scaleY: 0,
      scaleX: 1,
      duration: 1,
      ease: "expo.Out",
      delay: 0.2,
    })
    .from(
      "#HeroImage img",
      {
        y: "-100%",
        duration: 1,
        ease: "expo.Out",
      },
      "-=0.7"
    )
    .from(
      "#Title",
      {
        y: "50%",
        opacity: 0,
        duration: 1,
        ease: "expo.Out",
      },
      "-=0.7"
    )
    .from(
      "#Inner",
      {
        y: "40px",
        opacity: 0,
        duration: 1,
        ease: "expo.Out",
      },
      "-=0.7"
    )
    .from(
      "#Info",
      {
        y: "40px",
        opacity: 0,
        duration: 1,
        ease: "expo.Out",
      },
      "-=0.7"
    );
}

const Hero = ({ data }) => {
  return (
    <div id="Hero" className={styles.Hero}>
      <h1 id="Title" className={styles.title}>
        {data.title}
      </h1>

      <div className={styles.row}>
        <div id="HeroImage" className={styles.featuredImage}>
          <div id="before" className={styles.before}></div>
          <Image
            src="/oxholm-cv-profil.jpg"
            width={270}
            height={420}
            alt="Mathias Oxholm Profilbillede"
            layout="responsive"
          />
        </div>
        <div className={styles.about}>
          <div id="Inner" className={styles.inner}>
            <h2 className="h3">{data.about}</h2>
            <p className={styles.description}>
              Uddannet webudvikler med speciale i Wordpress og UI / UX. Jeg
              arbejder pt som Frontend udvikler hos Superego i Horsens, hvor jeg
              både sidder med specialudvikling af hjemmesider samt kundekontakt
              og fungerer som sparringspartner ift. designprocesser.
              <br />
              <br />
              Jeg bevæger mig altid fremad, og søger derfor nye udfordringer, da
              jeg personligt er midt i en overgangsperiode fra PHP til JS. Mere
              specifikt udforsker jeg React / Next.js, og selvom jeg ikke har
              opgivet mine spidskompetencer, finder jeg det lige nu betydeligt
              sjovere end hverdagens opgaver inden for PHP og jQuery. Jeg glæder
              mig til at finde en arbejdsplads, hvor jeg kan udvikle mig
              yderligere og sparre med mine kollegaer om fede projekter. Jeg er
              bosat i Kolding men har bil og er desuden villig til at flytte for
              det rette job.
            </p>
          </div>
          <div id="Info" className={styles.info}>
            <h2 className="h3">Info</h2>
            <ListItem title={data.age} body={data.date} />
            <ListItem
              title={data.phone}
              body="+45 20 31 60 93"
              href="tel:+4520316993"
            />
            <ListItem
              title="Email"
              body="hello@mathiasoxholm.dk"
              href="mailto:hello@mathiasoxholm.dk"
            />
            <ListItem title={data.address} body={data.location} />
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
