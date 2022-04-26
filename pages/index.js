import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Project from "../components/Project";
import { useRouter } from "next/router";
const oxholmAPI = process.env.NEXT_PUBLIC_API;

// Get text and translation from own API
export const getStaticProps = async () => {
  const res = await fetch(oxholmAPI);
  const data = await res.json();

  return {
    props: { ResumeText: data },
  };
};

export default function Home({ ResumeText }) {
  let router = useRouter();
  const { locale } = router;
  const t = ResumeText[locale];

  const jobs = t.jobs;
  const educations = t.educations;
  const privateProjects = t.privateProjects;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero data={t.hero} />

        <div className={styles.ExperienceList}>
          <SectionHeading title={t.experience} />

          <Experience
            title={jobs.superego.title}
            title2={jobs.superego.title2}
            location={jobs.superego.location}
            timeFrame={jobs.superego.timeFrame}
            description={jobs.superego.description}
            cases={jobs.superego.cases}
          />
          <Experience
            title={jobs.StepUp.title}
            title2={jobs.StepUp.title2}
            location="StepUp Media ApS - Kolding"
            timeFrame="Feb 2019 - Mar 2021"
            description="Udover min praktik, var jeg fuldtidsansat i ca. 2 år og siden fastansættelsen fik jeg lavet over 70 unikke website og webshop designs i Adobe XD. Derudover har jeg selv kodet 24 af siderne op i WordPress."
            cases={jobs.StepUp.cases}
          />
          <Experience
            title={jobs.StepUpIntern.title}
            title2={jobs.StepUpIntern.title2}
            location="StepUp Media ApS - Kolding"
            timeFrame="Aug 2018 - Okt 2018"
            description={jobs.StepUpIntern.description}
          />
          <Experience
            title={jobs.SecPro.title}
            title2={jobs.SecPro.title2}
            location="SecPro Sikring A/S - Kolding"
            timeFrame="Aug 2017 - Nov 2017"
            description={jobs.SecPro.description}
          />
          <Experience
            title={jobs.GejstGruppen.title}
            title2={jobs.GejstGruppen.title2}
            location="GejstGruppen ApS - Kolding"
            timeFrame="Jan 2017 - Apr 2017"
            description={jobs.GejstGruppen.description}
          />
        </div>

        <div className={styles.ExperienceList}>
          <SectionHeading title={t.education} />
          <Experience
            title={educations.Webdeveloper.title}
            title2={educations.Webdeveloper.title2}
            location="IBA Erhvervsakademi Kolding"
            timeFrame="Aug 2017 - Okt 2019"
          />
          <Experience
            title={educations.MultimedieDesigner.title}
            title2={educations.MultimedieDesigner.title2}
            location="IBA Erhvervsakademi Kolding"
            timeFrame="Aug 2015 - Nov 2017"
          />
          <Experience
            title={educations.STX.title}
            location="Munkensdam gymnasium - Kolding"
            timeFrame="Aug 2011 - Jun 2014"
          />
        </div>

        <div>
          <SectionHeading title={t.projects} />
          <div className={styles.row}>
            <Card
              text={t.Readr.text}
              text2={t.Readr.text2}
              text3={t.Readr.text3}
              buttonText={t.Readr.button}
            />
            <div className={styles.githubProjects}>
              <Project
                title={privateProjects.weather.title}
                body={privateProjects.weather.body}
                href="https://github.com/MathiasOxholm/weather-app"
              />
              <Project
                title={privateProjects.tree.title}
                body={privateProjects.tree.body}
                href="https://github.com/MathiasOxholm/linktree"
              />
              <Project
                title={privateProjects.calculator.title}
                body={privateProjects.calculator.body}
                href="https://github.com/MathiasOxholm/calculator"
              />
              <Project
                title={privateProjects.thisOrThat.title}
                body={privateProjects.thisOrThat.body}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
