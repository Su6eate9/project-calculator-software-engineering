import styles from "../styles.module.css";

export const ButtonGrey = ({ item, clean, porcentage, changeSign }) => {
  return (
    <button
      type="button"
      onClick={clean || porcentage || changeSign}
      className={styles.buttonGrey}
    >
      {item}
    </button>
  );
};
