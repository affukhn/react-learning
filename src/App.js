import React from "react";
import FocusInput from "./Callback/FocusInput";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div>
      {/* <ParentComponent /> */}
      <FocusInput />
      {/* count - {count} */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <Component1 />
        <Component2 />
        <Component3 /> */}
      {/* <UserContext.Provider value={"Arfath"}>
        <ChannelContext.Provider value={"Suk"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalHook /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCount /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
