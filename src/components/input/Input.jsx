import React from "react";
import styled, { css } from "styled-components";
import { Flex, StyleInput } from "./style";

const Input = (props) => {
  return (
    <Flex>
      <StyleInput {...props} />
    </Flex>
  );
};

export default Input;
