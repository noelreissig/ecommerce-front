import React from "react";
import Footer from "../../Footer/Footer";
import { Button } from "react-bootstrap";
import CartTable from "../../CartTable/CartTable";
import NavComponent from "../../Navbar/Navbar";
import cartStyles from "./cart.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const Cart = () => {
  const history = useHistory();
  const shoppingCart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.authReducer);
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((s) => !s);

  function handleBuy() {
    if (user.token) {
      history.push("/comprar");
    } else {
      toggleShow();
    }
  }

  return (
    <>
      <NavComponent />

      <div className={`${cartStyles.stylesCart} container px-0`}>
        <div className="row px-0">
          <div className="col-md-8 ps-0 ">
            <CartTable />
          </div>
          <div className="col-md-4 border rounded m-0 p-4 h-50 shadow">
            <h5>Tu Pedido</h5>
            <hr />
            <div className="d-flex justify-content-between pb-3 fs-6">
              <span>Subtotal Productos</span>
              <span>
                <strong>
                  USD{" "}
                  {shoppingCart.length > 0
                    ? shoppingCart
                        .reduce(
                          (acum, item) =>
                            acum + item.prod.price * item.quantity,
                          0
                        )
                        .toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                        })
                    : Number(0)}
                </strong>
              </span>
            </div>
            <div className="d-flex justify-content-between text-secondary fs-6">
              <span>Costo de envío</span>
              <span>sin costo</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between text-success fs-4">
              <span>Total</span>
              <span>
                <strong>
                  USD{" "}
                  {shoppingCart.length > 0
                    ? shoppingCart
                        .reduce(
                          (acum, item) =>
                            acum + item.prod.price * item.quantity,
                          0
                        )
                        .toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                        })
                    : Number(0)}
                </strong>
              </span>
            </div>
            <hr />
            <div className="fs-6">
              <h6>Formas de pago</h6>
              <div className="d-flex justify-content-around">
                <span>
                  <i className="fab fa-paypal"></i>
                </span>
                <span>
                  <i class="fab fa-cc-visa"></i>
                </span>
                <span>
                  <i class="fab fa-cc-mastercard"></i>
                </span>
                <span>
                  <i className="fas fa-exchange-alt"></i>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between"></div>
            <button
              onClick={() => handleBuy()}
              className="btn btn-outline-success rounded-pill px-4 mt-5 w-100"
            >
              Confirmar Compra
            </button>

            {login ? (
              <Login
                placement={"end"}
                setLogin={setLogin}
                startShow={register}
                show={show}
                setShow={setShow}
              />
            ) : (
              <Register
                placement={"end"}
                setLogin={setLogin}
                setRegister={setRegister}
                show={show}
                setShow={setShow}
              />
            )}
          </div>
        </div>
        <div className="row d-flex text-center mt-5">
          <div className="col">
            <button className="btn btn-outline-secondary rounded-pill px-4 mt-5 mx-2">
              Volver a Productos
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
