import React from 'react'
import styles from './MealItem.module.css'
import MealsItemForm from './MealsItemForm'

const MealItem = props => {
  const price=`$${props.price.toFixed(2)}`
  return (
    <li className={styles.meal}>
      <div><h3>{props.title}</h3>
      <div className={styles.description}>{props.desc}</div>
      <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm/>
      </div>
    </li>
  )
}

MealItem.propTypes = {}

export default MealItem