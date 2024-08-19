import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import useResize from "./hooks/useResize";
import useCounter from "./hooks/useCounter";

function App() {
  const {width, height} = useResize(sizeChanged);
  const {value, plusCount, minusCount, resetCount} = useCounter(0);
  function sizeChanged() {
     console.log('window size changed.');
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <div style={{width: width / 4, height: height / 4, background: '#61dafb'}}>
          welcome!!!

          <div style={{fontSize: '20px'}}>
            <button onClick={plusCount}>+</button>
            <button onClick={minusCount}>-</button>
            <button onClick={resetCount}>reset</button>
            count: {value}
          </div>

        </div>
      </header>

    </div>
  );
}

export default App;
