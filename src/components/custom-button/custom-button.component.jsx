import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  let classes = "custom-button";
  classes += isGoogleSignIn ? " google-sign-in" : "";
  let invert = inverted ? " inverted" : "";
  return (
    <button className={classes + invert} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
