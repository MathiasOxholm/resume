import styles from "../styles/Listitem.module.scss";

interface Props {
  title: string;
  body?: string;
  href?: string;
  children?: React.ReactNode;
};

const ListItem: React.FC<Props> = ({ title, body, href, children }) => {
  return (
    <div className={styles.ListItem}>
      <h3 className="h4">{title}</h3>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {body}
        </a>
      ) : (
        <p>{body}</p>
      )}
      {children && <div className={styles.inner}>{children}</div>}
    </div>
  );
};

export default ListItem;
