import React from "react";
import styled from "styled-components";
import Button from "./components/button/Button";
import { IconArrow, IconBell } from "./components/button/Icon";
import Input from "./components/input/Input";

const App = () => {
  return (
    <>
      <Flex row={false} gap={10}>
        <h1>Button</h1>
        <Flex gap={10}>
          <Button.Primary
            rightSlot={<IconArrow color={"#000000"} />}
            size="large"
            outlined
            onClick={() => window.alert("버튼을 만들어보세요")}
          >
            Large Primary Button
          </Button.Primary>
          <Button.Primary size="medium">Medium</Button.Primary>
          <Button.Primary>Small</Button.Primary>
        </Flex>

        <Flex gap={10}>
          <Button.Negative
            size="large"
            outlined
            rightSlot={<IconBell />}
            onClick={() => console.log(window.prompt("어렵나요?"))}
          >
            Large Negative Button
          </Button.Negative>
          <Button.Negative size="medium">Medium</Button.Negative>
          <Button.Negative>Small</Button.Negative>
        </Flex>
      </Flex>
      <div>
        <h1>Price Format Input</h1>
        <Input></Input>
      </div>
    </>
  );
};

export default App;

const Flex = styled.div`
  display: inline-flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  gap: ${({ gap }) => `${gap}px`};
`;
