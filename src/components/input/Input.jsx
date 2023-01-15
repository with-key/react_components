import React, { useState } from "react";
import styled from "styled-components";

/*--------------------------------------------------------*
 * Primitive Input
 *--------------------------------------------------------*/

const PrmitiveInput = ({ value, ...restProps }) => {
  return (
    <StyledInput {...restProps} value={value.format ?? value} type="text" />
  );
};

/*--------------------------------------------------------*
 * normal input
 *--------------------------------------------------------*/

const NormalInput = ({ getValues }) => {
  const [value, setValue] = useState("");

  const onChageHandler = (e) => {
    const { value } = e.target;
    setValue(e.target.value);
    getValues(value);
  };

  return <PrmitiveInput onChange={onChageHandler} value={value} />;
};

/*--------------------------------------------------------*
 * price format input
 *--------------------------------------------------------*/

const PriceFormatInput = ({ getValues }) => {
  const [value, setValue] = useState({
    raw: "0",
    format: "0",
  });

  const onChageHandler = ({ target }) => {
    const rex = /\D/g;

    const raw = target.value.replaceAll(",", "");
    const format = new Intl.NumberFormat().format(
      target.value.replaceAll(",", "")
    );

    if (!rex.test(target.value.replaceAll(",", ""))) {
      setValue((old) => ({
        ...old,
        raw,
        format,
      }));

      getValues && getValues({ raw, format });
    }
  };

  return <PrmitiveInput onChange={onChageHandler} value={value} />;
};

const Price = PriceFormatInput;
const Normal = NormalInput;

export { Price, Normal };

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
