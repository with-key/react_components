import styled, { css } from "styled-components";

export const StyleInput = styled.input`
  ${(props) => {
    if (props.size === "big") {
      return css`
        border: 1px solid red;
      `;
    }
  }}

  width: 150px;
`;

export const Flex = styled.div`
  display: flex;
`;
