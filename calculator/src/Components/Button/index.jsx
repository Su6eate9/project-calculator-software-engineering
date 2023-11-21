import styles from "./styles.module.css";

export const Button = ({ item, insert, value }) => {
  return (
    <button
      type="button"
      onClick={insert}
      value={value}
      className={styles.button}
    >
      {item}
    </button>
  );
};
