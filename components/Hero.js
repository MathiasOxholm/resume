import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import ListItem from "./ListItem";
import Instagram from "../components/svg/Instagram";
import Github from "../components/svg/Github";
import LinkedIn from "../components/svg/LinkedIn";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.from("#before", {
    scaleY: 0,
    duration: 1,
    ease: "expo.Out",
    delay: 0.2,
  });

  gsap.from("#HeroImage img", {
    y: "-100%",
    duration: 1,
    ease: "expo.Out",
    delay: 0.5,
  });
}

const HeroText = {
  da: {
    hero: "frontend udvikler med 5 års erfaring i specialudvikling af websites, -shops og -apps.",
    phone: "Telefon",
    age: "Alder",
    date: "31 / 05 / 1995",
    address: "Adresse",
    about: "Kort fortalt",
  },
  en: {
    hero: "Frontend developer with 5 years of experience in creating websites, shops and apps.",
    phone: "Phone",
    age: "Age",
    date: "05 / 31 / 1995",
    address: "Address",
    about: "About me",
  },
};

const Hero = () => {
  let router = useRouter();
  const { locale } = router;
  const t = HeroText[locale];

  return (
    <div id="Hero" className={styles.Hero}>
      <h1 className={styles.title}>{t.hero}</h1>

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
          <div className={styles.inner}>
            <h2 className="h3">{t.about}</h2>
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
            <ListItem title={t.age} body={t.date} />
            <ListItem
              title={t.phone}
              body="+45 20 31 60 93"
              href="tel:+4520316993"
            />
            <ListItem
              title="Email"
              body="hello@mathiasoxholm.dk"
              href="mailto:hello@mathiasoxholm.dk"
            />
            <ListItem title={t.address} body="6000 Kolding" />
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
