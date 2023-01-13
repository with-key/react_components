import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContext = createContext({});

/*--------------------------------------------------------*
 * Modal Root
 *--------------------------------------------------------*/

const ModalRoot = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

/*--------------------------------------------------------*
 * Modal Trigger
 *--------------------------------------------------------*/

const ModalTrigger = ({ children, asChild, ...rest }) => {
  const { setOpen } = useContext(ModalContext);
  return asChild ? (
    <div onClick={() => setOpen((pre) => !pre)} {...rest}>
      {children}
    </div>
  ) : (
    <button onClick={() => setOpen((pre) => !pre)} {...rest}>
      {children}
    </button>
  );
};

/*--------------------------------------------------------*
 * Modal Portal
 *--------------------------------------------------------*/

const ModalPortal = ({ children }) => {
  const portalTarget = document.getElementById("portal-target");

  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(children, portalTarget);
};

/*--------------------------------------------------------*
 * Modal Overlay
 *--------------------------------------------------------*/

const ModalOverlay = ({ onClose }) => {
  const { open, setOpen } = useContext(ModalContext);
  return open ? (
    <StyledOverlay onClick={() => (onClose ? setOpen(false) : null)} />
  ) : (
    <></>
  );
};

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0;
  position: fixed;
  opacity: 80%;
  background-color: #ddd;
`;

/*--------------------------------------------------------*
 * Modal Content
 *--------------------------------------------------------*/

const ModalContent = ({ children, ...rest }) => {
  const { open } = useContext(ModalContext);
  return open ? <StyledContent {...rest}>{children}</StyledContent> : <></>;
};

const StyledContent = styled.div`
  position: absolute;
`;

/*--------------------------------------------------------*
 * Modal Close
 *--------------------------------------------------------*/

const ModalClose = ({ children, asChild, ...rest }) => {
  const { setOpen } = useContext(ModalContext);
  return asChild ? (
    <div onClick={() => setOpen(false)} {...rest}>
      {children}
    </div>
  ) : (
    <button onClick={() => setOpen(false)} {...rest}>
      {children}
    </button>
  );
};

const Root = ModalRoot;
const Trigger = ModalTrigger;
const Portal = ModalPortal;
const Overlay = ModalOverlay;
const Close = ModalClose;
const Content = ModalContent;

export { Root, Trigger, Portal, Overlay, Close, Content };
