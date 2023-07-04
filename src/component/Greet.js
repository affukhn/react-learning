import React from "react";

// function Greet() {
//   return <h1>Hello Arfath</h1>;
// }

const Greet = ({ name, children }) => {
  console.log(name);
  console.log(children);
  return (
    <>
      <h1>{name}</h1>
      {children[0]}
    </>
  );
};
export default Greet;
