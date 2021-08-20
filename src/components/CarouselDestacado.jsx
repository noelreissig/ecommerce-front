import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselDestacado = () => {
  return (
    <div className="p-5 text-dark h-25">
      <h4>Productos destacados</h4>
      <Carousel className="w-100">
        <Carousel.Item>
          <div className="row">
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/2A_lampara.webp"
                alt="Lampara"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/3B_almohadon.webp"
                alt="Almohadon"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/living/8b-mesa.webp"
                alt="Mesa"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/dormitorio/3b_mesaLuz.webp"
                alt="Mesa Luz"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/living/5b-butaca.webp"
                alt="Butaca"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/dormitorio/7A_comoda.webp"
                alt="Comoda"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/2A_lampara.webp"
                alt="Lampara"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/3B_almohadon.webp"
                alt="Almohadon"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/living/8b-mesa.webp"
                alt="Mesa"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/dormitorio/3b_mesaLuz.webp"
                alt="Mesa Luz"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/living/5b-butaca.webp"
                alt="Butaca"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/dormitorio/7A_comoda.webp"
                alt="Comoda"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDestacado;
