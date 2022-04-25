import styles from "../styles/Experience.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  const Experiences = gsap.utils.toArray(".Experience");

  Experiences.forEach((Experience) => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: Experience,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    animateIn.from(Experience, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      ease: "power4.Out",
    });
  });
}

const Experience = ({
  title,
  title2,
  location,
  timeFrame,
  description,
  cases,
}) => {
  return (
    <div className={clsx(styles.Experience, "Experience")}>
      <div className={styles.info}>
        <h3 className="h2">
          {title} <br />
          {title2 && title2}
        </h3>
        <div className={styles.extraInfo}>
          <p className={styles.location}>{location}</p>
          <div className={styles.divider}></div>
          <p className={styles.timeFrame}>{timeFrame}</p>
        </div>
      </div>
      {description && (
        <div className={styles.description}>
          <p>{description}</p>
          {cases && (
            <ul className={styles.cases}>
              {cases.map((item, i) => (
                <li key={i}>
                  <a href={"https://" + item} target="_blank" rel="noreferrer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Experience;
