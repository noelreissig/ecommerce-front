import React from "react";
// import { a } from "react-router-dom";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row d-flex pt-4 ">
            <div className="col-md-6 ps-0 text-start">
              <div className="text-white">Secciones</div>
              <ul className="list-unstyled deco-list">
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
              <ul className="list-unstyled deco-list">
                <li>
                  <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contact-modal"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <hr className="mt-4 text-white" />
            <span className="pb-4 text-white"> Deco Hack. 2021 ®</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
