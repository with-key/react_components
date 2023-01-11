import React from "react";
import styled from "styled-components";
import Button from "./components/button/Button";
import { IconArrow, IconBell } from "./components/button/Icon";
import Input from "./components/input/Input";
import * as Modal from "./components/modal/Modal";

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
      <div>
        <h1>Modal</h1>
        <Flex gap={10}>
          <Modal.Root>
            <Modal.Trigger asChild>
              <Button.Primary>open modal</Button.Primary>
            </Modal.Trigger>
            <Modal.Portal>
              <Modal.Overlay onClose />
              <ModalContent>
                <div>닫기와 확인 버튼이 모두 있는 모달이네요.</div>
                <ModalButtonSetter>
                  <Modal.Close asChild>
                    <Button.Negative>닫기</Button.Negative>
                  </Modal.Close>
                  <Button.Primary
                    onClick={() => {
                      console.log("on!");
                    }}
                  >
                    확인
                  </Button.Primary>
                </ModalButtonSetter>
              </ModalContent>
            </Modal.Portal>
          </Modal.Root>
          <Modal.Root>
            <Modal.Trigger asChild>
              <Button.Negative size="large" outlined>
                open modal
              </Button.Negative>
            </Modal.Trigger>
            <Modal.Portal>
              <Modal.Overlay onClose />
              <ModalContent>
                <div>닫기만 있는 모달이네요.</div>
                <ModalButtonSetterSecond>
                  <Modal.Close asChild>
                    <Button.Negative>X</Button.Negative>
                  </Modal.Close>
                </ModalButtonSetterSecond>
              </ModalContent>
            </Modal.Portal>
          </Modal.Root>
        </Flex>
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

const ModalContent = styled(Modal.Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 500px;
  height: 300px;
`;

const ModalButtonSetter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const ModalButtonSetterSecond = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
