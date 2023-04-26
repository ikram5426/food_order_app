import React from 'react'
import meals from '../../assets/meals.jpg'
import styles from './header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Pak Meals</h1>
        <HeaderCartButton onCartClick={props.onCartClick}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt='meals' />
      </div>
    </React.Fragment>
  );
}

export default Header