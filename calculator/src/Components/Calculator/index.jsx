import { Button } from "../Button";
import styles from "./styles.module.css";

export const Calculator = () => {
  function insert() {
    // code
  }

  function clean() {
    // code
  }

  function back() {
    // code
  }

  function calculate() {
    // code
  }

  return (
    <main className={styles.main}>
      <section className={styles.display}></section>

      <section className={styles.pad}>
        <Button item="AC" />
        <Button item="+/-" />
        <Button item="%" />
        <Button item="/" />
      </section>

      <section className={styles.pad}>
        {" "}
        <Button item="7" />
        <Button item="8" />
        <Button item="9" />
        <Button item="x" />
      </section>

      <section className={styles.pad}>
        <Button item="4" />
        <Button item="5" />
        <Button item="6" />
        <Button item="-" />
      </section>

      <section className={styles.pad}>
        <Button item="1" />
        <Button item="2" />
        <Button item="3" />
        <Button item="+" />
      </section>

      <section className={styles.pad}>
        <Button item="0" />
        <Button item="," />
        <Button item="=" />
      </section>
    </main>
  );
};
