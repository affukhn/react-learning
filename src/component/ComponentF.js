import React from "react";
import { ChannelContext, UserContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(Channel) => {
                return (
                  <div>
                    {console.log(Channel)}
                    User context value {user} my channel is {Channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
