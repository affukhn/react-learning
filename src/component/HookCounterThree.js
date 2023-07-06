import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
      />
      <h2>you firstName name is -{name.firstName}</h2>
      <h2>you lastNameName name is -{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;
