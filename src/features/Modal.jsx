import React from "react";
import styled from "styled-components";
import Stack from "../components/@elem/Stack";
import Button from "../components/button/Button";
import * as Modal from "../components/modal/Modal";

const FeatureModal = () => {
  return (
    <div>
      <h1>Modal</h1>
      <Stack gap={10}>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button.Primary>open modal</Button.Primary>
          </Modal.Trigger>
          <Modal.Portal>
            <Modal.Overlay />
            <ModalContent>
              <div>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </div>
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
            <MiniModalContent>
              <div>
                닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.
              </div>
              <ModalButtonSetterSecond>
                <Modal.Close asChild>
                  <StyledModalClose>X</StyledModalClose>
                </Modal.Close>
              </ModalButtonSetterSecond>
            </MiniModalContent>
          </Modal.Portal>
        </Modal.Root>
      </Stack>
    </div>
  );
};

export default FeatureModal;

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

const StyledModalClose = styled.button`
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    border: 1px solid #333;
  }
`;

const MiniModalContent = styled(Modal.Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 300px;
  height: 200px;
`;
