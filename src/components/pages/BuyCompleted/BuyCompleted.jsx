import React from "react";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";

function BuyCompleted() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <NavComponent />
      <div className="container text-center rounded shadow my-5 p-3">
        <h2>Su compra fue realizada con éxito</h2>
        <h3>Gracias por confiar en nosotros!</h3>
        <button
          className="btn btn-success rounded p-2 m-3"
          onClick={() => handleClick()}
        >
          Volver al inicio
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default BuyCompleted;
