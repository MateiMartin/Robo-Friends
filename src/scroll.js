import React from "react";
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};
export { Scroll };
