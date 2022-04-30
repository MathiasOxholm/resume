import styles from "../styles/Skill.module.scss";

const Skill = ({ title, children }) => {
  return (
    <div className={styles.Skill}>
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};

export default Skill;
