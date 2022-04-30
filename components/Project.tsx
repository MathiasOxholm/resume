import styles from "../styles/Project.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  const Projects = gsap.utils.toArray<HTMLElement>(".Project");

  Projects.forEach((Project) => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: Project,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    animateIn.from(Project, {
      y: 80,
      opacity: 0,
      duration: 0.75,
      ease: "expo.Out",
    });
  });
}

interface Props {
  title: string;
  body: string;
  href: string;
};

const Project: React.FC<Props> = ({ title, body, href }) => {
  return (
    <a
      href={href}
      className={clsx(styles.Project, "Project")}
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="h4">{title}</h3>
      <p>{body}</p>
    </a>
  );
};

export default Project;
