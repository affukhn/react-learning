import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
import ComponentF from "./ComponentF";

function ComponentC() {
  const user = useContext(UserContext);
  const Channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{Channel}
      <ComponentF />
    </div>
  );
}

export default ComponentC;
