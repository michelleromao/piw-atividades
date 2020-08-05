import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="btn1">{props.name}</button>
    </>
  );
}

export default Button;
