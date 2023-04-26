import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './headerButton.module.css'

const HeaderCartButton = (props) => {
  const cartClickHandler=()=>[
props.onCartClick()
  ]
  return (
    <button className={styles.button} onClick={cartClickHandler}>
      <span className={styles.icon} ><CartIcon/></span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
