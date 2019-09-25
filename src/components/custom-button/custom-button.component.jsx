import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  let classes = "custom-button";
  classes += isGoogleSignIn ? " google-sign-in" : "";
  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
