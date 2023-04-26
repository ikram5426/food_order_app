import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: 1, name: "Penda", price: 500, amount: 5 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
const hideCart=()=>{
      props.onModalClick()
    }
  return (
    
    <Modal onModalClick={props.onModalClick}>
      <div>
        {cartItems}
        <div className={styles.total}>
          <span>Total amount</span>
          <span>500</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={hideCart}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
