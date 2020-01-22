import React, { useState } from 'react';

function Count() {
    const [count, setCounter] = useState(0)
  return (
    <div className="App">   
    <h4>Counter</h4>  
       <button onClick={() => setCounter(prevCount => prevCount + 1)} data-testid="addCount"> Add </button>
        <div data-testid="count">{count}</div>
       <button onClick={() => setCounter(prevCount => prevCount - 1)} data-testid="minusCount"> Minus </button>       
    </div>
  );
}

export default Count;