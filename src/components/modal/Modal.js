import React from "react";
import "./modal.css";
import { Modal } from "react-bootstrap";

const ModalComponent = ({open, setOpen, body}) => {
  return (
    <Modal show={open} onHide={() => setOpen(false)} centered>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}

export default ModalComponent;