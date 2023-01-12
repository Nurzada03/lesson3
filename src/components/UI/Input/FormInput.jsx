import React from "react";

import "./FormInput.css";

const FormInput = ({
  id,
  styleLabel,
  labelName,
  inputType,
  placeholder,
  styleInput,
  ...rest
}) => {
  return (
    <form className="container">
      <label htmlFor={id} className={styleLabel}>
        {labelName}
      </label>
      <br />
      <input
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        className={styleInput}
        {...rest}
      />
    </form>
  );
};

export default FormInput;
