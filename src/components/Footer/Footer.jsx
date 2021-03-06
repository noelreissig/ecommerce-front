import React from "react";
import footerStyles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text-white py-4">
                <h5>
                  Enterate primero de novedades, oportunidades, promociones y
                  más.
                </h5>
                <p className={`${footerStyles.sizeP} my-0`}>
                  Suscribite a nuestra página y obtené un 10% de descuento en tu
                  primera compra.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-white py-4">
                <p className={`${footerStyles.sizeP} my-0`}>
                  <i className="fas fa-home "></i> Casa Central: Rivera 123 esq.
                  Juan Paullier
                </p>
                <p className={`${footerStyles.sizeP} my-0`}>
                  <i class="far fa-clock "></i> Lunes a viernes de 9 a 19 hrs.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4 d-flex justify-content-center">
            <div className="col-md-2">
              <p className="text-white my-0">DECO-HACK</p>
              <ul className="list-unstyled deco-list">
                <li>
                  <Link to="/sobre-nosotros">Sobre el proyecto</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p className="text-white my-0">Ayuda</p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">Preguntas Frecuentes</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p className="text-white my-0">Métodos de pago</p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">PayPal</Link>
                </li>
                <li>
                  <Link to="">MercadoPago</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p className="text-white my-0">Contacto</p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">
                    <i className="fas fa-phone-alt me-1"> </i>
                    <span>0800 1234</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <li>
                      <Link to="">
                        <i className=" fab fa-whatsapp fs-6 me-1"></i>
                        <span>099 123 123</span>
                      </Link>
                    </li>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <p className="text-white my-0">Síguenos</p>
              <ul className="list-unstyled">
                <li>
                  <Link to="">
                    <i className="fab fa-facebook ms-2 me-2 "></i>
                    <i className="fab fa-instagram  me-2"></i>
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="mt-4 text-white" />
            <span className="pb-4 text-white text-center">
              © Copyright 2021 || Deco-Hack
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
