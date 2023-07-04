import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          ?/ subcribe
        </button>
      </>
    );
  }
}

export default Message;
