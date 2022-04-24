import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />

        <div className={styles.ExperienceList}>
          <SectionHeading title="Erfaring" />
          <Experience
            title="Frontend"
            title2="Developer"
            location="Superego - Horsens"
            timeFrame="Apr 2021 - Nu"
            description="Hos Superego er jeg lead developer på alle custom løsninger i WordPress. PHP, HTML, SCSS, JS / jQuery, gsap, Github mm. er nogle af de teknologier jeg benytter mig af til dagligt."
            cases={["leinvest.dk", "kommpas.dk", "zurface.dk"]}
          />
          <Experience
            title="Grafisk Ansvarlig "
            title2="og Webudvikler"
            location="StepUp Media ApS - Kolding"
            timeFrame="Feb 2019 - Mar 2021"
            description="Udover min praktik, var jeg fuldtidsansat i ca. 2 år og siden fastansættelsen fik jeg lavet over 70 unikke website og webshop designs i Adobe XD. Derudover har jeg selv kodet 24 af siderne op i WordPress."
            cases={["circusgin.com", "rhetor.dk"]}
          />
          <Experience
            title="Webudvikler"
            title2="- Praktikant"
            location="StepUp Media ApS - Kolding"
            timeFrame="Aug 2018 - Okt 2018"
            description="3 måneders virksomhedspraktik via Webudvikler uddannelsen."
          />
          <Experience
            title="Webudvikler"
            title2="- Studiearbejde"
            location="SecPro Sikring A/S - Kolding"
            timeFrame="Aug 2017 - Nov 2017"
            description="Projektbaseret studiejob under Multimediedesigneren. WordPress + WooCommerce shop management."
          />
          <Experience
            title="Webudvikler"
            title2="- Praktikant"
            location="GejstGruppen ApS - Kolding"
            timeFrame="Jan 2017 - Apr 2017"
            description="3 måneders virksomhedspraktik via Multimediedesigner uddannelsen. Udarbejdelse af skræddersyet spørgeskema i PHP."
          />
        </div>

        <div className={styles.ExperienceList}>
          <SectionHeading title="Uddanelse" />
          <Experience
            title="International Webudvikling"
            title2="- Formidling og design"
            location="IBA Erhvervsakademi Kolding"
            timeFrame="Aug 2017 - Okt 2019"
          />
          <Experience
            title="Multimediedesigner"
            title2="m. speciale i videoproduktion"
            location="IBA Erhvervsakademi Kolding"
            timeFrame="Aug 2015 - Nov 2017"
          />
          <Experience
            title="STX Studentereksamen"
            location="Munkensdam gymnasium - Kolding"
            timeFrame="Aug 2011 - Jun 2014"
          />
        </div>

        <div>
          <SectionHeading title="Private projekter" />
          <div className={styles.row}>
            <Card />
            <div className={styles.githubProjects}>
              <Project
                title="Weather app"
                body="Bygget i Next.js"
                href="https://github.com/MathiasOxholm/weather-app"
              />
              <Project
                title="Linktree"
                body="Bygget i Next.js"
                href="https://github.com/MathiasOxholm/linktree"
              />
              <Project
                title="Calculator"
                body="Bygget i Next.js"
                href="https://github.com/MathiasOxholm/calculator"
              />
              <Project title="This or that" body="Bygget i React Native" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
