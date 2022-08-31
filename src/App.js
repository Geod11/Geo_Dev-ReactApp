import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { useState } from 'react';


function App() {

const [currentState , updateStateFunction] = useState(100)

function decrementCurrentState() {
  updateStateFunction(previousCurrentState => previousCurrentState - 1)
}

function incrementCurrentState() {
  updateStateFunction(previousCurrentState => previousCurrentState + 1)
}

  return (
    <div className="App">
      <Header/>
      <h1>Add or subtract:
      </h1>
      <button onClick={decrementCurrentState}>-</button>
      <span>{currentState}</span>
      <button onClick={incrementCurrentState}>+</button>
      <Footer/>
    </div>
  );
}

export default App;
