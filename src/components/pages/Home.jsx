import React from "react";
import CarouselDestacado from "../CarouselDestacado";
import Hero from "../Hero";
import Footer from "../Footer";
import NavComponent from "../Navbar";
import homeStyles from "./home.module.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(`http://localhost:3001/api/category`);
      setCategory(response.data);
    };
    getCategory();
  }, []);
  console.log(category);
  return (
    <div>
      <NavComponent />
      <Hero />
      <div className="container">
        <h2 className="py-5 text-center">
          ¡Te ayudamos a transformar tu hogar!
        </h2>
        <div className="row d-flex justify-content-center pb-4">
          {/*para .map */}
          <div className="col-sm-3">
            <Link to="/comedor" className={homeStyles.linkDecoration}>
              <div className={homeStyles.cardCategory}>
                <img
                  className={`img-fluid rounded`}
                  src="../img/1_comedor_opcionDos.webp"
                  alt="comedor"
                />
                <h3 className="">Comedor</h3>
              </div>
            </Link>
          </div>
          {/*para .map */}
          <div className="col-sm-3">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/2_living.webp"
                alt="living"
              />
              <h3>Living</h3>
            </div>
          </div>
          <div className="col-sm-3">
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
          <div className="col-sm-3">
            <div className={homeStyles.cardCategory}>
              <img
                className="img-fluid rounded"
                src="../img/4_jardin.webp"
                alt="jardin"
              />
              <h3>Jardin</h3>
            </div>
          </div>
          <div className="col-sm-3">
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
