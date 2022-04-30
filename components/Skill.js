import styles from "../styles/Skill.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  const Skills = gsap.utils.toArray(".Skill");

  Skills.forEach((Skill) => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: Skill,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    animateIn.from(Skill, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      ease: "expo.Out",
    });
  });
}

const Skill = ({ title, content }) => {
  return (
    <div className={clsx(styles.Skill, "Skill")}>
      <h4>{title}</h4>
      <ul>
        {content &&
          content.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Skill;
