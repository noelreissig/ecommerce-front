import React from "react";
import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html">
                <div>
                  <img
                    id="footer-logo"
                    src="img/automotora_vip_logo.png"
                    alt="AutoVIP"
                  />
                </div>
              </a>
            </div>

            <div className="col-md-3">
              <ul>
                <li>
                  <a href="sales.html">Brand New Cars</a>
                </li>
                <li>
                  <a href="sales.html">Used Cars</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contact-modal"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <p classNameName="color: #ddd">Copyright &copy; AutoVIP 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
