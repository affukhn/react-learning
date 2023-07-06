import childComponent from "./childComponent";
import React, { Component } from "react";
//NOT WORKING
class parentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parent}`);
  }

  render() {
    return (
      <div>
        <childComponent />
      </div>
    );
  }
}

export default parentComponent;
