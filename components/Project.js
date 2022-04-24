import styles from "../styles/Project.module.scss";

const Project = ({ title, body, href }) => {
  return (
    <a href={href} className={styles.Project} target="_blank" rel="noreferrer">
      <h3 className="h4">{title}</h3>
      <p>{body}</p>
    </a>
  );
};

export default Project;
