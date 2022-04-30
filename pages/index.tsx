import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Project from "../components/Project";
import Skill from "../components/Skill";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
const oxholmAPI = process.env.NEXT_PUBLIC_API;

// Get text and translation from own API
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(oxholmAPI);
  const data = await res.json();

  return {
    props: { ResumeText: data },
  };
};

interface Props {
  ResumeText: object;
}

const Home: React.FC<Props> = ({ ResumeText }) => {
  let router = useRouter();
  const { locale } = router;
  const t = ResumeText[locale];

  const jobs = t.jobs;
  const educations = t.educations;
  const privateProjects = t.privateProjects;
  const skills = t.skills;

  return (
    <>
      <NextSeo
        title={t.meta.title}
        description={t.meta.description}
        noindex={true}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Hero */}
          <Hero data={t.hero} />

          {/* Experiences */}
          <div className={styles.ExperienceList}>
            <SectionHeading title={t.experience} />

            {Object.keys(jobs).map((key, index) => (
              <Experience
                key={index}
                title={jobs[key].title}
                title2={jobs[key].title2}
                location={jobs[key].location}
                timeFrame={jobs[key].timeFrame}
                description={jobs[key].description}
                cases={jobs[key].cases}
              />
            ))}
          </div>

          {/* Education */}
          <div className={styles.ExperienceList}>
            <SectionHeading title={t.education} />
            {Object.keys(educations).map((key, index) => (
              <Experience
                key={index}
                title={educations[key].title}
                title2={educations[key].title2}
                location={educations[key].location}
                timeFrame={educations[key].timeFrame}
              />
            ))}
          </div>

          {/* Personal projects */}
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
                {Object.keys(privateProjects).map((key, index) => (
                  <Project
                    key={index}
                    title={privateProjects[key].title}
                    body={privateProjects[key].body}
                    href={privateProjects[key].href}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <SectionHeading title={t.skillHeading} />
            <div className={styles.grid}>
              {Object.keys(skills).map((key, index) => (
                <Skill
                  key={index}
                  title={skills[key].title}
                  content={skills[key].content}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;