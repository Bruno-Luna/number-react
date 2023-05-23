import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Display from './components/display';


function App() {
  const [ number, setNumber] = useState(0)

  function handleDecrementNumber() {
    setNumber(number - 1) 
    console.warn('decrementar: ', number);
  }
  
  function handleIncrementNumber() {
    setNumber(number + 1)  
    console.log('incrementar: ', number);
  }


  return (
    <div className="App">
      <header className="App-header">
       <Button onClick={() => {handleDecrementNumber()}} title={'-'}></Button>
       <Display number={number}></Display>
       <Button onClick={() => {handleIncrementNumber()}} title={'+'}></Button>
      </header>
    </div>
  );
}

export default App;
