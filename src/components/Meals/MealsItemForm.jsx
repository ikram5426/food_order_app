import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmountNum.length === 0 ||
      enteredAmountNum < 0 ||
      enteredAmountNum > 5
    ) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmountNum)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={inputAmountRef}
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>ADD</button>
      {!validAmount && <p>Please enter valid quantity (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
