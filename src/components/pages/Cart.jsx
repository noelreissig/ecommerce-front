import React from "react";
import Footer from "../Footer";
import { Navbar } from "react-bootstrap";
import { CartTable } from "../CartTable";
import NavComponent from "../Navbar";
import cartStyles from "./cart.module.css";

const Cart = () => {
  return (
    <>
      <NavComponent />
      <div className={`${cartStyles.stylesCart} container`}>
        <div className="row">
          <div className="col-md-8 ps-0 ">
            <CartTable />
          </div>
          <div className="col-md-4 border m-0 p-3 h-50">
            <h5>Total del carrito</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Total de la Orden</span>
              <span>
                <strong>USD 1000</strong>
              </span>
            </div>
            <button className="btn btn-outline-dark rounded-pill px-4 mt-5 w-100">
              Confirmar Compra
            </button>
          </div>
        </div>
        <div className="row d-flex text-center">
          <div className="col">
            <button className="btn btn-light rounded-pill px-4 mt-5 mx-2">
              Volver a Productos
            </button>
            <button className="btn btn-dark rounded-pill px-4 mt-5 mx-2">
              Confirmar Compra
            </button>
            <button className="btn btn-outline-danger rounded-pill px-4 mt-5 mx-2">
              Cancelar Compra
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
