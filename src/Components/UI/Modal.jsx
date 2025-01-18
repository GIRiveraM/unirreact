import React from "react";
import ModalCss from "./Modal.module.css";
import { createPortal } from "react-dom";

const EstadoInicial = (props) => {
  return <div className={ModalCss.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={ModalCss.modal}>
      <div className={ModalCss.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<EstadoInicial onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
