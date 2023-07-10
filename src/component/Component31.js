import React, { useContext } from "react";
import { CountContext } from "../App";
import Component11 from "./Component11";

function Component31() {
  const countContext1 = useContext(CountContext);
  return (
    <div>
      component11 count -{countContext1.countState}
      <button onClick={() => countContext1.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext1.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext1.countDispatch("reset")}>
        Reset
      </button>
      <Component11 />
    </div>
  );
}

export default Component31;
