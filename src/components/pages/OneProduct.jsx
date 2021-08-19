import React from "react";
import CarouselOneProduct from "../CarouselOneProduct";
import NavComponent from "../Navbar";
import OneProductStyles from "./oneProduct.module.css";
import Footer from "../Footer";

function OneProduct() {
  return (
    <div>
      <NavComponent />
      <div className="container pb-5">
        <div className="row gx-0 mt-4">
          <div className="col-md-6 mt-5">
            <CarouselOneProduct />
            {/* <img
              className={`${OneProductStyles.imgCard} img-fluid rounded`}
              src="../img/comedor/2.mesa_dos.webp"
              alt="comedor"
            /> */}
          </div>
          <div className="col-md-6 text-start">
            <h2 className="pt-5">Mesa Redonda Shanelle De Terrazo</h2>
            <h3>USD 1.665</h3>
            <p className="fw-light">
              Deja que el terrazo sea el protagonista de tu casa. Shanelle llega
              con una nueva versión, con el sobre que tanto nos gusta acompañado
              de madera maciza de acacia para un acabado perfecto. Marca
              tendencia con materiales naturales y auténticos como tú.
            </p>
            <hr />
            <div className="mb-3 d-flex">
              <select
                class="form-select w-25 me-5"
                aria-label="Default select example"
              >
                <option value="" selected>
                  Cantidad
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button className="btn btn-dark w-100">Comprar</button>
            </div>

            <div className="my-1">
              <p className="fw-bold my-1">Características</p>
              <table class="table table-hover fw-light">
                <thead>
                  <tbody>
                    <tr>
                      <td>Medidas: </td>
                      <td className="text-end fw-light">
                        Al77 x An120 x Pr120 (cm)
                      </td>
                    </tr>
                    <tr>
                      <td>Tipo: </td>
                      <td className="text-end fw-light"> Fija </td>
                    </tr>
                    <tr>
                      <td>Material: </td>
                      <td className="text-end fw-light">
                        Madera maciza, Terrazo
                      </td>
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

            <div>
              <p className="fw-bold my-1">Descripción</p>
              <p className={`${OneProductStyles.sizeText} fw-light`}>
                Mesa redonda con sobre terrazo Ø 120 cm con fondo blanco y
                madera maciza de acacia. <br />
                Estructura hecha con madera maciza de acacia con un acabado
                blanqueado. <br />
                Se trata de una pieza con un diseño adaptable para interiores y
                preparada para exteriores. <br />
                Esta mesa pertenece a la colección Shanelle, con diferentes
                acabados disponibles para sobre y estructura.
              </p>
              <p className="fw-bold my-1">Garantía</p>
              <p className={`${OneProductStyles.sizeText} fw-light`}>
                2 años a partir de la compra
              </p>
              <p className="fw-bold my-1">Métodos y costos de envío</p>
              <p className={`${OneProductStyles.sizeText} fw-light`}>
                A todo Montevideo: Envío sin costo en compras mayores a USD 100
                | Costo normal: USD 6 <br />A todo el país vía DAC: Costo
                variable según tamaño del paquete.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OneProduct;
