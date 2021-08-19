import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function ModalAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button variant="sucess" onClick={handleShow}>
          <i class="fas fa-edit"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Perfil</Modal.Title>
          </Modal.Header>
          <Form.Group className=" mx-3 " controlId="formBasicText">
            <Form.Label className="my-1">Nombre</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className=" mx-3 " controlId="formBasicText">
            <Form.Label className="my-1">Apellido</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicText">
            <Form.Label className="my-1">Dirección</Form.Label>
            <Form.Control size="sm" type="text" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicNumber">
            <Form.Label className="my-1">Teléfono</Form.Label>
            <Form.Control size="sm" type="number" />
          </Form.Group>
          <Form.Group className=" mx-3" controlId="formBasicEmail">
            <Form.Label className="my-1">Email</Form.Label>
            <Form.Control size="sm" type="email" />
          </Form.Group>
          <Form.Group className="mb-4 mx-3" controlId="formBasicPassword">
            <Form.Label className="my-1">Contraseña</Form.Label>
            <Form.Control size="sm" type="password" />
          </Form.Group>

          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Guardar cambios
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ModalAdmin;
