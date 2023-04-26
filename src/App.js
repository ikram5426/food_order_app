import react, { useState } from 'react';
import Header from "./components/Layouts/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartShow,setCartShow]=useState(false)

  const cartShowHandler=()=>{
    setCartShow(true)
  }

  const cartHideHandler =()=>{
    setCartShow(false)
  }
  return (
    <react.Fragment>
     {cartShow && <Cart onModalClick={cartHideHandler}/>}
      <Header onCartClick={cartShowHandler}/>
      <main>
        <Meals/>
      </main>
    </react.Fragment>
  );
}

export default App;
