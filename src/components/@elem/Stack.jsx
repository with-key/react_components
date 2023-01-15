import React from "react";
import styled from "styled-components";

const Stack = ({ children, ...restProps }) => {
  return <StyledStack {...restProps}>{children}</StyledStack>;
};

export default Stack;

const StyledStack = styled.div`
  display: flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  gap: ${({ gap }) => `${gap}px`};
`;
