import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";

function ConfirmCard() {
  const history = useHistory();

  function handleClick() {
    history.push("/comprar");
  }

  function handleConfirm() {
    history.push("/gracias-por-su-compra");
  }

  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <h5 className="text-danger text-center fs-6">
            Aclaración: El proceso de compra es una simulación. Por favor
            ingrese datos ficticios.{" "}
          </h5>
          <div className="col-md-5 rounded shadow-lg my-5 p-3">
            <h5 className="text-center">
              Ingresa los datos de tu tarjeta a continuación.
            </h5>
            <hr />
            <div>
              <label htmlfor="exampleFormControlInput1" className="form-label">
                Número Tarjeta
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese número de tarjeta sin espacios ni guiones"
                maxLength="12"
                minLength="12"
              />
              <label
                htmlfor="exampleFormControlInput2"
                className="form-label mt-3"
              >
                Fecha de Expiración
              </label>
              <input
                required
                type="month"
                className="form-control"
                id="exampleFormControlInput2"
              />
              <label
                htmlfor="exampleFormControlInput3"
                className="form-label mt-3"
              >
                Código CVV
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="123"
                maxLength="3"
              />
              <label
                htmlfor="exampleFormControlInput4"
                className="form-label mt-3"
              >
                Número de Documento
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Ingrese C.I sin puntos ni guiones"
                maxLength="8"
              />
              <div className="d-flex justify-content-around">
                <button
                  onClick={() => handleClick()}
                  className="btn btn-light m-3"
                >
                  Volver
                </button>
                <button
                  onClick={() => handleConfirm()}
                  className="btn btn-success m-3"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmCard;
