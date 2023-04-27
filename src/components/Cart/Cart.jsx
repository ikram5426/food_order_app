import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from './CartItem'
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

const addItemHandler=(item)=>{}

const removeItemHandler=(id)=>{}

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        );

      })}
    </ul>
  );
  const hideCart = () => {
    props.onModalClick();
  };
  return (
    <Modal onModalClick={props.onModalClick}>
      <div>
        {cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={hideCart}>
            Close
          </button>
          {hasItems && <button className={styles.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
