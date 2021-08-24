import React from "react";
import CarouselOneProduct from "../../CarouselOneProduct/CarouselOneProduct";
import NavComponent from "../../Navbar/Navbar";
import OneProductStyles from "../OneProduct/oneProduct.module.css";
import Footer from "../../Footer/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OneProduct() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        ` http://localhost:3001/api/product/${slug}`
      );
      setProduct(response.data);
    };
    getProduct();
  }, []);
  console.log("Product", product);

  // useEffect(() => {
  //   if (products && products.length > 0) {
  //     setProducts(products);
  //   }
  // });

  return (
    <div>
      <NavComponent />
      <div className="container pb-5">
        <div className="row gx-0 mt-4">
          <div className="col-md-6 mt-5">
            <CarouselOneProduct product={product} />
          </div>
          {product && (
            <div className="col-md-6 text-start pt-5">
              <h2 className=" d-flex justify-content-between">
                {product.name}
                <i class=" far fa-heart text-danger fs-5"></i>
              </h2>

              <div className="d-flex">
                <h5 className="d-flex"> USD {product.price}</h5>
                <p
                  className={`${OneProductStyles.sizeText} fw-light ms-2 mt-1`}
                >
                  Financiá tu compra
                  <span className="text-success fw-bold"> sin intereses*</span>
                </p>
              </div>

              <p className="fw-light">{product.details}</p>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="fw-light">
                  Disponibilidad:
                  <span className="text-success fw-bold fw-light">
                    En Stock {product.stock}
                  </span>
                </p>
              </div>

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
                        <td className="text-end fw-light">
                          {" "}
                          Colonial, Rústico{" "}
                        </td>
                      </tr>
                    </tbody>
                  </thead>
                </table>
              </div>

              <div>
                <p className="fw-bold my-1">Descripción</p>
                <p className={`${OneProductStyles.sizeText} fw-light`}>
                  {product.description}
                </p>
                <p className="fw-bold my-1">Garantía</p>
                <p className={`${OneProductStyles.sizeText} fw-light`}>
                  {product.warranty}
                </p>
                <p className="fw-bold my-1">Métodos y costos de envío</p>
                <p className={`${OneProductStyles.sizeText} fw-light`}>
                  {product.delivery}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OneProduct;
