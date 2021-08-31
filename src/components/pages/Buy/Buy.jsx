import React from "react";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Buy = () => {
  const history = useHistory();
  const { token } = useSelector((state) => state.authReducer);
  const user = useSelector((state) => state.authReducer);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [postalCod, setPostalCod] = useState("");
  const departamentos = [
    "Montevideo",
    "Canelones",
    "Maldonado",
    "Artigas",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ];

  const handleBuy = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    axios({
      method: "post",
      url: "http://localhost:3001/api/order",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    history.push("/gracias-por-su-compra");
  };
  return (
    <div>
      <NavComponent />
      <div className="container shadow  my-5 p-4 rounded w-50">
        <h2>Confirma tus datos</h2>
        <Form
          onSubmit={(ev) => handleBuy(ev)}
          className="mb-3 modalForm text-dark"
        >
          <Form.Group controlId="formGridFirstName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              value={firstname}
              onChange={(ev) => setFirstname(ev.target.value)}
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formGridLastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
              disabled
            />
          </Form.Group>
          <hr />

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección </Form.Label>
            <Form.Control
              required
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="Calle 1234 Apto 123"
            />
          </Form.Group>

          <Form.Group controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              required
              type="text"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
              placeholder="Ingresar..."
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label className="mb-2 mt-3">Departamento</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Elegir...</option>
              {departamentos.map((item) => (
                <option>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formGridZip">
            <Form.Label className="mb-2 mt-3">Código Postal</Form.Label>
            <Form.Control
              required
              type="text"
              value={postalCod}
              onChange={(ev) => setPostalCod(ev.target.value)}
              placeholder="Ingrese código postal"
            />
          </Form.Group>
          <hr />
          <h2 className="mt-4">Elige tu forma de pago</h2>
          <div className="form-check my-3">
            <input
              type="radio"
              className="form-check-input"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Mercado pago
            </label>
          </div>
          <div className="form-check my-3">
            <input
              type="radio"
              className="form-check-input"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Paypal
            </label>
          </div>
          <button variant="primary" className="mb-4 btn btn-success">
            Confirmar
          </button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;

//src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
