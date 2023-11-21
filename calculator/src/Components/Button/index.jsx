import styles from "./styles.module.css";

export const Button = ({ item, color }) => {
  return <button className={styles.button}>{item}</button>;
};
