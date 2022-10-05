import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        style={{
          border: "1px solid green",
        }}
        {...props}
      />
    </>
  );
};

export default Input;
