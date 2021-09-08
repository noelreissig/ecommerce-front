import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
const ToastUpdate = ({ show, setShow }) => {
  const style = {
    marginTop: "65px",
    zIndex: "5",
  };
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        style={style}
        className="position-fixed overlay"
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
