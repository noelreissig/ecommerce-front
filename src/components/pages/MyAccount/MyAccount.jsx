import React from "react";
import { useState, useEffect } from "react";
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
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
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

  const [postalCod, setPostalCod] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${user.id}`
      );
    };
    getProduct();
  }, []);

  const handleUpdate = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    axios({
      method: "patch",
      url: "http://localhost:3001/api/users/${user.id}",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    history.push("/");
  };
  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow rounded my-5 p-4">
            <h2 className="text-center">Mi Perfil</h2>
            <Form
              onSubmit={(ev) => handleUpdate(ev)}
              className="mb-3 modalForm text-dark"
            >
              <Form.Group controlId="formGridFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  name="firstname"
                  value={firstname}
                  onChange={(ev) => setFirstname(ev.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formGridLastname">
                <Form.Label className="pt-2">Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  value={lastname}
                  onChange={(ev) => setLastname(ev.target.value)}
                />
                <Form.Label className="pt-2">Correo electrónico</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </Form.Group>
              <hr className="my-4" />
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="address"
                  value={address}
                  onChange={(ev) => setAddress(ev.target.value)}
                />
                <Form.Label className="pt-2">Teléfono</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={phone}
                  name="phone"
                  onChange={(ev) => setPhone(ev.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                  placeholder="Ingresar..."
                />
              </Form.Group>
              <div className="row d-flex justify-content-between">
                <div className="col-md-6">
                  <Form.Group controlId="formGridState">
                    <Form.Label className="mb-2 mt-3">Departamento</Form.Label>
                    <Form.Select
                      className="me-auto"
                      defaultValue="Choose..."
                      name="department"
                    >
                      <option>Elegir...</option>
                      {departamentos.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-6 ">
                  <Form.Group controlId="formGridZip">
                    <Form.Label className="mb-2 mt-3">Código Postal</Form.Label>
                    <Form.Control
                      size="md"
                      className="me-auto"
                      required
                      type="text"
                      name="postalcode"
                      value={postalCod}
                      onChange={(ev) => setPostalCod(ev.target.value)}
                      placeholder="Ingrese código postal"
                    />
                  </Form.Group>
                </div>
              </div>
              <hr className="my-5" />
              <h3 className="mt-4 text-center">Mis favoritos</h3>
              <div className="row mx-0 d-flex justify-content-center my-4">
                <div className="col-md-2 mb-2 mx-2 text-center">
                  <img
                    className="d-block w-100 rounded"
                    src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/2A_lampara.webp`}
                    alt="Mesa"
                  />
                  <span>Lampara de pie</span>
                </div>
                <div className="col-md-2 mb-2 mx-2 text-center">
                  <img
                    className="d-block w-100 rounded"
                    src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_almohadon.webp`}
                    alt="Mesa"
                  />
                  <span>Almohadón Living</span>
                </div>
                <div className="col-md-2 mb-2 mx-2 text-center">
                  <img
                    className="d-block w-100 rounded"
                    src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/1B_maceta.webp`}
                    alt="Maceta"
                  />
                  <span>Maceta</span>
                </div>{" "}
                <div className="col-md-2 mb-2 mx-2 text-center">
                  <img
                    className="d-block w-100 rounded"
                    src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/10A_espejo.webp`}
                    alt="Espejo"
                  />
                  <span>Espejo Redondo</span>
                </div>
                <div className="col-md-2 mb-2 mx-2 text-center">
                  <img
                    className="d-block w-100 rounded"
                    src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_butaca.webp`}
                    alt="Butaca"
                  />{" "}
                  <span>Butaca</span>
                </div>
              </div>

              <hr className="my-5" />
              <h2 className="mt-4 text-center">Histórico de Órdenes</h2>
              <div className="row mx-0 d-flex justify-content-between my-4">
                <div className="col-md-3 bg-warning mb-2">orden3</div>
                <div className="col-md-3 bg-warning mb-2">orden3</div>
                <div className="col-md-3 bg-warning mb-2">orden3</div>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  variant="primary"
                  className="my-4 btn btn-success align-item-center"
                >
                  Confirmar cambios
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;

//src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
