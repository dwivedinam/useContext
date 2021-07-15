import React ,{useContext}from 'react';
import { counterContect } from "./CounterContext";

function Ccomponent({counter}) {
const context = useContext(counterContect)
    return (
        <div>
        <div className="functioncompont">
        <h2>Class component</h2>
        <p>Counter: {counter}</p>
        {context}
      </div>
        </div>
    )
}

export default Ccomponent
