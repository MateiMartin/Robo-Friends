import React from "react";
import "./scroll.css";

const Scroll = (props) => {
  return (
    <div className="scroll-container">
      {props.children}
    </div>
  );
};

export { Scroll };
