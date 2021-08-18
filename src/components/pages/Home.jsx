import React from "react";
import CarouselDestacado from "../CarouselDestacado";
import Hero from "../Hero";
import Footer from "../Footer";
import NavComponent from "../Navbar";
import homeStyles from "./home.module.css";
import App from "../../App.css";

function Home() {
  return (
    <div>
      <NavComponent />
      <Hero />
      <div className="container">
        <h2 className="pt-3">Te ayudamos a transformar tu hogar</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/1_comedor_opcionDos.webp"
                alt="comedor"
              />
              <h3>Comedor</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/2_living.webp"
                alt="living"
              />
              <h3>Living</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/3_dormitorio.webp"
                alt="dormitorio"
              />
              <h3>Dormitorio</h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/4_jardin.webp"
                alt="jardin"
              />
              <h3>Jardin</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/5_complementos.webp"
                alt="complementos"
              />
              <h3>Complementos</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CarouselDestacado />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
