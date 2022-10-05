import React from "react";

const Button = ({ children, variant, ...restProps }) => {
  const bigStyle = {
    width: "100%",
  };
  const smallStyle = {
    width: "150px",
  };

  function selectVariant(variant) {
    if (variant === "big") {
      return bigStyle;
    }
    if (variant === "small") {
      return smallStyle;
    }
  }

  return (
    <button style={selectVariant(variant)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
