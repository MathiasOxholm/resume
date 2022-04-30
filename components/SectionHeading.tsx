import styles from "../styles/SectionHeading.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

// GSAP Animation
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  const Headings = gsap.utils.toArray<HTMLElement>(".Heading");

  Headings.forEach((Heading) => {
    const animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: Heading,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    animateIn.from(Heading, {
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: "power4.Out",
    });
  });
}

interface Props {
  title: string;
};

const SectionHeading: React.FC<Props> = ({ title }) => {
  return (
    <div className={clsx(styles.SectionHeading, "Heading")}>
      <h2 className="h3">{title}</h2>
    </div>
  );
};

export default SectionHeading;
