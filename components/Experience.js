import styles from "../styles/Experience.module.scss";

const Experience = ({
  title,
  title2,
  location,
  timeFrame,
  description,
  cases,
}) => {
  return (
    <div className={styles.Experience}>
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
