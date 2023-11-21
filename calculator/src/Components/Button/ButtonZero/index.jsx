import styles from "../styles.module.css";

export const ButtonZero = ({ item }) => {
  return (
    <button type="button" className={styles.buttonZero}>
      {item}
    </button>
  );
};
