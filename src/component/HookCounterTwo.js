import React, { useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        decrement
      </button>

      <button onClick={incrementFive}>incrementFive</button>
    </div>
  );
}

export default HookCounterTwo;
