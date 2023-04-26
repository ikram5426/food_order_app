import{ useState } from 'react';
import Header from "./components/Layouts/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartShow,setCartShow]=useState(false)

  const cartShowHandler=()=>{
    setCartShow(true)
  }

  const cartHideHandler =()=>{
    setCartShow(false)
  }
  return (
    <CartContextProvider>
     {cartShow && <Cart onModalClick={cartHideHandler}/>}
      <Header onCartClick={cartShowHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
