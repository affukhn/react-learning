import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        class component {this.props.name} and branch {this.props.branch}
      </h1>
    );
  }
}

export default Welcome;
