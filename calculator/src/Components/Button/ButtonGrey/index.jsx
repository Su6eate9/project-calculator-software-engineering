import styles from "../styles.module.css";

export const ButtonGrey = ({ item, clean, porcentage, handlerOperator }) => {
  return (
    <button
      type="button"
      onClick={clean || porcentage || handlerOperator}
      className={styles.buttonGrey}
    >
      {item}
    </button>
  );
};
