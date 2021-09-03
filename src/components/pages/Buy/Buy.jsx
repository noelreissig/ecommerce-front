import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import buyStyles from "./buy.module.css";

const Buy = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useSelector((state) => state.authReducer);
  const shoppingCart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.authReducer);

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
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [postalCod, setPostalCod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const today = new Date();
  today.setDate(today.getDate() + 2);

  const handleBuy = (ev) => {
    ev.preventDefault();
    const order = {
      products: shoppingCart,
      deliveryAddress: address,
      deliveryCity: city,
      deliveryDepartment: department,
      deliveryPostalCod: postalCod,
      deliveryDate: today,
      userId: user.id,
      paymentMethod: paymentMethod,
    };

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/order`,
      data: order,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "CLEAR_CART" });
    history.push("/confirmar-tarjeta");
  };

  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 shadow  my-5 rounded">
            <Form
              onSubmit={(ev) => handleBuy(ev)}
              className="mb-3 modalForm text-dark"
            >
              <h2>Confirma tus datos</h2>
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
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(ev) => setDepartment(ev.target.value)}
                >
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
              <hr className="mt-5" />

              <div>
                <h2 className="mt-4 text-center my-4">
                  Elige tu forma de pago
                </h2>
                <div className="row mb-3 ">
                  <div className="col-md-5">
                    <div className="form-check my-3">
                      <input
                        type="radio"
                        className="form-check-input ms-3"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Mercado Pago"
                        onChange={(ev) => setPaymentMethod(ev.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Mercado Pago
                      </label>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img
                      className={`${buyStyles.sizeImg}`}
                      src="https://cdn.shopify.com/s/files/1/0427/9277/9940/files/MercadoPago_aedfdcee-98aa-4497-96c1-a215e78518a5.png?v=1597962725"
                      alt=""
                      width="291"
                      height="138"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-check my-3">
                      <input
                        type="radio"
                        className="form-check-input ms-3"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Paypal"
                        onChange={(ev) => setPaymentMethod(ev.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Paypal{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img
                      className={`${buyStyles.sizeImg}`}
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                      border="0"
                      alt="PayPal Acceptance Mark"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button variant="primary" className="my-4 btn btn-success">
                  Confirmar
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
