import React from "react";
import parentComponent from "./componentClass/parentComponent";
import Greet from "./componentClass/Greet";
import Welcome from "./componentClass/welcome";
import Hello from "./Hello";
import Message from "./componentClass/message";
import Counter from "./componentClass/Counter";
import EventBind from "./componentClass/EventBind";

function classApp() {
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

export default classApp;
