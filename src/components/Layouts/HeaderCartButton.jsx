import React ,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './headerButton.module.css'
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)

const qtyOfItems=cartCtx.items.reduce((currQty,item)=>{
  return currQty+item.amount
},0)


  const cartClickHandler=()=>[
props.onCartClick()
  ]
  return (
    <button className={styles.button} onClick={cartClickHandler}>
      <span className={styles.icon} ><CartIcon/></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{qtyOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
