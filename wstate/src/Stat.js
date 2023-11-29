import React, { useState } from 'react';

function Stat() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const shButtons = () => {
    setShow(!show);
  
  };

  return (
    <div>
     <button onClick={shButtons}> {show ? "Hide counter" : "show counter"}</button>
   
           

      {show && (
        <div>
           <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button><br/>
          <button onClick={reset}>Reset</button>
        </div>
      )}

     
    </div>
  );
}

export default Stat;