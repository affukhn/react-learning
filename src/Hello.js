import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello" },
    React.createElement("h1", { className: "name" }, "Weclome to CreateElement")
  );
};

export default Hello;
