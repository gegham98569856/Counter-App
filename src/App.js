import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './features/counter/counterSlice';

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue,setInputValue] = useState(0)
  return (
    <div className="App">
      
        <h1>Counter</h1>
        <input 
        type="number"
        value={inputValue}
        onChange={(evt) => setInputValue(Number.parseInt(evt.target.value))}
        />
        <br></br>
        <div>
        <button
        onClick={() => dispatch(decrementByAmount(inputValue))}>Decrement</button>
        <button
        onClick={() => dispatch(incrementByAmount(inputValue))}>Increment</button>
        </div>
     
     
        <h1>{value}</h1>
        <div>
          <button
          onClick={() => dispatch(decrement())}
          >-</button>
          <button
          onClick={() => dispatch(increment())}
          >+</button>
        </div>
    
    </div>
  );
}

export default App;
