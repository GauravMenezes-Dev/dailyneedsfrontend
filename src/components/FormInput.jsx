import React from "react";

const FormInput = ({ handleChange, labelText, ...otherProps }) => (
  <div className="field">
    <label className="label">{labelText}</label>
    <div className="control">
      <input className="input" onChange={handleChange} {...otherProps} />
    </div>
  </div>
);

export default FormInput;
