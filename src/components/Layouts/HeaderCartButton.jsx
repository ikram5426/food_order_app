import React ,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './headerButton.module.css'
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)


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
