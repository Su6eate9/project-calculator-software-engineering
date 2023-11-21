import styles from "../styles.module.css";

export const ButtonOrange = ({ item, back }) => {
  return (
    <button type="button" onClick={back} className={styles.buttonOrange}>
      {item}
    </button>
  );
};
