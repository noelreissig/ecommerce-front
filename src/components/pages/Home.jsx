import React from "react";
import homeStyles from "./home.module.css";

function Home() {
  return (
    <div>
      <nav id="autovip-header" className="navbar navbar-expand-md ">
        <div className="container">
          <a href="index.html">
            <img
              id="footer-logo"
              src="img/automotora_vip_logo.png"
              alt="AutoVIP"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#links"
            aria-controls="links"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="links"
            className="collapse navbar-collapse justify-content-end"
          >
            <ul className="navbar-nav">
              <li>
                <a className="nav-link nav-link-autovip" href="sales.html">
                  Brand New Cars
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-autovip" href="sales.html">
                  Used Cars
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-autovip" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#contact-modal"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={homeStyles.homeImgBackground}>
        <div className={`${homeStyles.hero} container`}>
          <h1>Deco-Hack</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde debitis, exercitationem inventore nemo praesentium. Corporis
            asperiores.
          </p>
          <button className="btn btn-light rounded-pill">
            Ver destacados ->
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className="pt-3">Te ayudamos a transformar tu hogar</h2>
        <div className="row">
          <div className="col-md-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid"
                src="../img/1_comedor.jpg"
                alt="comedor"
              />
              <h3>Comedor</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid"
                src="../img/2_living.webp"
                alt="living"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid"
                src="../img/3_dormitorio.webp"
                alt="dormitorio"
              />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid"
                src="../img/4_jardin.webp"
                alt="jardin"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid"
                src="../img/5_complementos.webp"
                alt="complementos"
              />
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="bg-dark ">
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

export default Home;
