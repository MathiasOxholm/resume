import styles from "../styles/Skill.module.scss";

const Skill = ({ title, content }) => {
  return (
    <div className={styles.Skill}>
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
