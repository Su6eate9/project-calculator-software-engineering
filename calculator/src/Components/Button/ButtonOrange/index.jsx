import styles from "../styles.module.css";

export const ButtonOrange = ({
  item,
  back,
  divide,
  handleOperator,
  calculate,
}) => {
  return (
    <button
      type="button"
      onClick={back || divide || handleOperator || calculate}
      className={styles.buttonOrange}
    >
      {item}
    </button>
  );
};
