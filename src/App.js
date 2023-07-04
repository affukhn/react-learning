import React from "react";
import parentComponent from "./component/parentComponent";
import Greet from "./component/Greet";
import Welcome from "./component/welcome";
import Hello from "./Hello";
import Message from "./component/message";
import Counter from "./component/Counter";
import EventBind from "./component/EventBind";

function App() {
  return (
    <div className="App">
      {/* <Message />
      <Counter /> */}
      {/* <Greet name="Arfath">
        <p>This is children elements</p>
        <p>This is 2nd children</p>
      </Greet> */}
      <parentComponent></parentComponent>
      {/* <EventBind /> */}
      <parentComponent />
      {/* <Welcome name="arfath" branch="cs" />
      <Hello />  */}
    </div>
  );
}

export default App;
