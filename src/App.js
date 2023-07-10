import React from "react";
import ComponentA from "./component/ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={"Arfath"}>
        <ChannelContext.Provider value={"Suk"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
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
  );
}

export default App;
