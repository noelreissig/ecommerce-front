import React from "react";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import buyStyles from "./buyCompleted.module.css";

function BuyCompleted() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center rounded shadow my-5 p-5 w-auto">
            <i
              className={`${buyStyles.sizeIcon} far fa-check-circle text-success`}
            ></i>
            <h2 className="my-4">Su compra fue realizada con éxito</h2>
            <h3>Gracias por confiar en nosotros!</h3>
            <button
              className="btn btn-outline-success fw-bold rounded p-2 m-3"
              onClick={() => handleClick()}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BuyCompleted;
