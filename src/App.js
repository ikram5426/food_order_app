import react from 'react';
import Header from "./components/Layouts/Header";
import Meals from './components/Meals/Meals';

function App() {
  return (
    <react.Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </react.Fragment>
  );
}

export default App;
