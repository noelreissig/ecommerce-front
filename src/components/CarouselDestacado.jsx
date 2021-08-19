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
                src="./img/comedor/3.mesa.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/2.luminaria.jpg"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/3_dormitorio.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/jardin/2_sillas_jardin.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/living/8_sofa_dos_cuerpos.webp"
                alt="Second slide"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/comedor/4.mesa.webp"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/comedor/3.mesa.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/3_dormitorio.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/complementos/2.luminaria.jpg"
                alt="Second slide"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src="./img/comedor/4.mesa.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/jardin/2_sillas_jardin.webp"
                alt="Second slide"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src="../img/living/8_sofa_dos_cuerpos.webp"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDestacado;
