import React from "react";
import styled from "styled-components";

const Stack = ({ children, ...rest }) => {
  return <StStack {...rest}>{children}</StStack>;
};

export default Stack;

const StStack = styled.div`
  display: flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  gap: ${({ gap }) => `${gap}px`};
`;
