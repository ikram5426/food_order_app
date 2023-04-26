import react from 'react';
import Header from "./components/Layouts/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <react.Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </react.Fragment>
  );
}

export default App;
