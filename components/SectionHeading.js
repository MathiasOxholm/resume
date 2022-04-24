import styles from "../styles/SectionHeading.module.scss";

const SectionHeading = ({ title }) => {
  return (
    <div className={styles.SectionHeading}>
      <h2 className="h3">{title}</h2>
    </div>
  );
};

export default SectionHeading;
