import React from 'react'
import {useState} from 'react';
import "./App.css";
import Ccomponent from './Ccomponent';
import { counterContect } from './CounterContext';
import Fcomponent from './Fcomponent';
import NewApp from './NewApp';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter + 1);
  }

  const decrement = () =>{
    setCounter(counter - 1);
  }
  return (

    <div >
      <div className="app" style={{border:'1px solid gray' , height:'400px' ,width:'500px', textAlign: 'center'}}>
      <h2>App Component</h2>

      <h3>Counter: {counter}</h3>
      <button className="" onClick={ increment}> Increment</button>
      <button className="" onClick={decrement}>Decrement</button>
      <br></br>
      <br></br>
  
    <counterContect.Provider value={{counter,setCounter}}>
    <Fcomponent/>
      <br></br>
      <br></br>
      {/* <Ccomponent/> */}
    </counterContect.Provider>
  </div>
    </div>
  )

}

export default App
