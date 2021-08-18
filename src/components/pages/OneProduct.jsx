import React from "react";
import AccordionComponent from "./Accordion";
import NavComponent from "../Navbar";
import OneProductStyles from "./oneProduct.module.css";

function OneProduct() {
  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className={`${OneProductStyles.imgCard} img-fluid`}
              src="../img/comedor/2.mesa_dos.webp"
              alt="comedor"
            />
          </div>
          <div className="col-md-6 text-start">
            <h3>
              Mesa Redonda Shanelle De Terrazo - Negro Y Madera Maciza Acacia Ø
              120 Cm
            </h3>
            <p>USD1.665</p>
            <p>
              Deja que el terrazo sea el protagonista de tu casa. Shanelle llega
              con una nueva versión, con el sobre que tanto nos gusta acompañado
              de madera maciza de acacia para un acabado perfecto. Marca
              tendencia con materiales naturales y auténticos como tú.
            </p>

            <p className="fw-bold">Características</p>

            <table class="table table-hover">
              <thead>
                <tbody>
                  <tr>
                    <td>Medidas: </td>
                    <td className="text-end fw-light">Al77 x An120 x Pr120 (cm)</td>
                  </tr>
                  <tr>
                    <td>Tipo: </td>
                    <td className="text-end fw-light"> Fija </td>
                  </tr>
                  <tr>
                    <td>Material: </td>
                    <td className="text-end fw-light"> Madera maciza, Terrazo </td>
                  </tr>
                  <tr>
                    <td>Ambiente: </td>
                    <td className="text-end fw-light"> Comedor </td>
                  </tr>
                  <tr>
                    <td>Estilo: </td>
                    <td className="text-end fw-light"> Colonial, Rústico </td>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>
        </div>
        <div className="mt-5">
          <h4> Descripción</h4>
          <hr />
          <AccordionComponent />
          {/* <h4 className="text-start">Detalles técnicos</h4>
          <p className="fw-bold text-start">Más detalles</p>
          <p className="text-start">
            Mesa redonda con sobre terrazo Ø 120 cm con fondo blanco y madera
            maciza de acacia.
          </p>
          <p className="text-start">
            Estructura hecha con madera maciza de acacia con un acabado
            blanqueado.
          </p>
          <p className="text-start">
            Se trata de una pieza con un diseño adaptable para interiores y
            preparada para exteriores.
          </p>
          <p className="text-start">
            Esta mesa pertenece a la colección Shanelle, con diferentes acabados
            disponibles para sobre y estructura.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
