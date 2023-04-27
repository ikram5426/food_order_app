import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/CartContext";

const MealItem = (props) => {
  const crtCtx=useContext(CartContext)

  const onAddToCart = (num) => {
crtCtx.addItem({
  id:props.id,
  name:props.name,
  amount:num,
  price:props.price
})
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

MealItem.propTypes = {};

export default MealItem;
