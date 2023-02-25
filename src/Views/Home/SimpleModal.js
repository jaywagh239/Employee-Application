import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const SimpleModal = (props) => {
  const {
    show,
    setShow,
    variant,
    classes,
    title,
    enableHeader,
    enableFooter,
    Header,
    Footer,
    children,
    Body,
    onClose,
    ...rest
  } = props;
  // const [show, setShow] = useState(true);0
  const toggle = () => {
    onClose ? onClose() : setShow(!show);
  };
  const modalVariant = variant ? "modal-" + variant : "";
  return (
    <Modal
      isOpen={show}
      toggle={toggle}
      className={modalVariant + " " + classes}
      {...rest}
    >
      {Header === undefined && enableHeader && (
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
      )}

      {Header && <Header toggle={toggle} />}
      {Body === undefined ? <ModalBody>{children}</ModalBody> : Body()}
      {Footer === undefined && enableFooter && (
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default SimpleModal;
