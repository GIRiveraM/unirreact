import React, { forwardRef } from "react";
import InputCss from "./input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={InputCss.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
