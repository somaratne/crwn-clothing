import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onHandleChange, label, value, ...otherProps }) => {
  let classes = "form-input-label";
  classes += value.length > 0 ? " shrink" : "";
  return (
    <div className="group">
      <input
        style={{ fontFamily: "Open Sans Condensed" }}
        className="form-input"
        onChange={onHandleChange}
        {...otherProps}
      />
      {label ? <label className={classes}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
