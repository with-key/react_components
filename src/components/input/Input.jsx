import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [value, setValue] = useState({
    raw: "0",
    format: "0",
  });

  return (
    <>
      <StyledInput
        type="text"
        value={value.format}
        onChange={({ target }) => {
          const rex = /\D/g;
          if (!rex.test(target.value.replaceAll(",", ""))) {
            setValue((old) => ({
              ...old,
              raw: target.value.replaceAll(",", ""),
              format: new Intl.NumberFormat().format(
                target.value.replaceAll(",", "")
              ),
            }));
          }
        }}
      />
      <br />
      <br />
      <div>
        <div>
          <code>format: {value.format}</code>
        </div>
        <div>
          <code>raw : {value.raw}</code>
        </div>
      </div>
    </>
  );
};

export default Input;
const StyledInput = styled.input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;

  &:focus-within {
    box-shadow: 0 0 0 1px #000;
  }
`;
