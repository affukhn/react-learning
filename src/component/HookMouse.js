import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setx] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setx(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("usEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X -{x} y -{y}
    </div>
  );
}

export default HookMouse;
