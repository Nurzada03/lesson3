import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.btnStyle} onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </button>
  );
};

export default Button;
