import { useState } from "react";

import { Button } from "../Button";
import { ButtonOrange } from "../Button/ButtonOrange";
import { ButtonGrey } from "../Button/ButtonGrey";

import styles from "./styles.module.css";

export const Calculator = () => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [operator, setOperator] = useState("");

  function insert(e) {
    let num = e.target.value;

    if (value === 0 || value === -0) {
      setValue(num);
    } else {
      setValue(value + num);
    }
  }

  function clean() {
    setValue(0);
    setOldValue(0);
    setOperator("");
  }

  function back() {
    setValue.slice(0, -1);
  }

  function porcentage() {
    setValue(value / 100);
  }

  function changeSign() {
    if (value > 0) {
      setValue(-value);
    } else {
      setValue(Math.abs(value));
    }
  }

  function handleOperator(e) {
    let operatorValue = e.target.value;

    if (operator) {
      calculate();
      setOperator(operatorValue);
      setOldValue(value);
    } else {
      setOperator(operatorValue);
      setOldValue(value);
      setValue(0);
    }
  }

  function calculate() {
    let result = 0;
    switch (operator) {
      case "/":
        result = parseFloat(oldValue) / parseFloat(value);
        break;
      case "x":
        result = parseFloat(oldValue) * parseFloat(value);
        break;
      case "-":
        result = parseFloat(oldValue) - parseFloat(value);
        break;
      case "+":
        result = parseFloat(oldValue) + parseFloat(value);
        break;
      default:
        result = parseFloat(value);
    }
    setValue(String(result));
    setOldValue(0);
    setOperator("");
  }

  return (
    <main className={styles.main}>
      <section className={styles.display}>
        <p>{value}</p>
      </section>

      <section className={styles.pad}>
        <ButtonGrey item="AC" clean={clean} />
        <ButtonGrey item="+/-" changeSign={changeSign} />
        <ButtonGrey item="%" porcentage={porcentage} />
        <ButtonOrange item="/" handleOperator={handleOperator} value={"/"} />
      </section>

      <section className={styles.pad}>
        <Button item="7" insert={insert} value={7} />
        <Button item="8" insert={insert} value={8} />
        <Button item="9" insert={insert} value={9} />
        <ButtonOrange item="x" handleOperator={handleOperator} value={"x"} />
      </section>

      <section className={styles.pad}>
        <Button item="4" insert={insert} value={4} />
        <Button item="5" insert={insert} value={5} />
        <Button item="6" insert={insert} value={6} />
        <ButtonOrange item="-" handleOperator={handleOperator} value={"-"} />
      </section>

      <section className={styles.pad}>
        <Button item="1" insert={insert} value={1} />
        <Button item="2" insert={insert} value={2} />
        <Button item="3" insert={insert} value={3} />
        <ButtonOrange item="+" handleOperator={handleOperator} value={"+"} />
      </section>

      <section className={styles.pad}>
        <Button item="0" insert={insert} value={0} />
        <Button item="." insert={insert} value={"."} />
        <ButtonOrange item="C" back={back} />
        <ButtonOrange item="=" calculate={calculate} />
      </section>
    </main>
  );
};
