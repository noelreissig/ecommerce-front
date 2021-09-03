import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
const ToastUpdate = ({ show, setShow }) => {
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        style={{ marginTop: "65px" }}
        className="position-fixed"
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          bg="success"
          autohide
        >
          <Toast.Body className="text-light text-center">
            Datos Modificados correctamente!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ToastUpdate;
