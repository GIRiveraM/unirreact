import React, { forwardRef } from "react";
import InputCss from "./input.module.css";

const InputLogin = forwardRef((props, ref) => {
  const {
    id,
    label = "label for",
    errors = null,
    placeholder = "",
    type = "text",
    ...rest
  } = props;
  return (
    <div className={InputCss.inputLogin}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...rest}
        ref={ref}
      />
      {errors && <p className={InputCss.error}> {errors} </p>}
    </div>
  );
});

export default InputLogin;
