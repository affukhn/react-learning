import React, { useContext } from "react";
import { CountContext } from "../App";
import Component11 from "./Component11";

function Component1() {
  const countContext = useContext(CountContext);

  return (
    <div>
      component31 count -{countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
      <Component11 />
    </div>
  );
}

export default Component1;
