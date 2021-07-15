import React, { useContext } from "react";
import { counterContect } from "./CounterContext";

function Fcomponent() {
  const {counter, setCounter}= useContext(counterContect);
  return (
    <div className="functioncompont">
      <h2>Functional component</h2>
      <p>CounterValue: {counter}</p>
      <button className="" onClick= {() => setCounter(counter + 1)}> Increment</button>
      <Fchild/>
    </div>
  );
}

const Fchild = () => {
  const  {counter, setCounter}= useContext(counterContect);
  return (
    <div className="border">
      <h2>Functional child component</h2>
      <p>Counter:{counter}</p>
      <button className="" onClick= {() => setCounter(counter - 1)}> Decrement</button>
     
    </div>
  );
};

export default Fcomponent;
