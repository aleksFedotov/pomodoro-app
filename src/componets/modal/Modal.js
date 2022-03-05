import React, { Fragment } from 'react';

import { createPortal } from 'react-dom';

import Settings from '../settings/Settings';

import {
  BackDropWrapper,
  ModalOverlayWrapper,
  ContentWrapper,
} from './ModalStyles';

const Backdrop = () => {
  return <BackDropWrapper />;
};

const ModalOverlay = () => {
  const modalVariants = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <ModalOverlayWrapper
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ContentWrapper>
        <Settings />
      </ContentWrapper>
    </ModalOverlayWrapper>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
