import React from "react";
// import { a } from "react-router-dom";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row d-flex pt-3 text-white">
            <div className="col-md-6 ps-0 text-start">
              <div>Secciones</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Living</a>
                </li>
                <li>
                  <a href="#">Comedor</a>
                </li>
                <li>
                  <a href="#">Dormitorio</a>
                </li>{" "}
                <li>
                  <a href="#">Jardin</a>
                </li>{" "}
                <li>
                  <a href="#">Complementos</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 pe-0 text-end">
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contact-modal"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#">Sobre Nosotros</a>
                </li>
              </ul>
            </div>
            <hr />
            <span className="pb-4"> Deco Hack. 2021 ®</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
