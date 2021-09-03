import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselDestacado = () => {
  return (
    <div className="pb-5 text-dark h-25 d-none d-lg-block">
      <h4>Productos destacados</h4>
      <Carousel className="w-100">
        <Carousel.Item>
          <div className="row">
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/2A_lampara.webp`}
                alt="Lampara"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_almohadon.webp`}
                alt="Almohadon"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/8B_mesa.webp`}
                alt="Mesa"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_mesaLuz.webp`}
                alt="Mesa Luz"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/5B_butaca.webp`}
                alt="Butaca"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/7A_comoda.webp`}
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
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/2A_lampara.webp`}
                alt="Lampara"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_almohadon.webp`}
                alt="Almohadon"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/8B_mesa.webp`}
                alt="Mesa"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/3B_mesaLuz.webp`}
                alt="Mesa Luz"
              />
            </div>
            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/5B_butaca.webp`}
                alt="Butaca"
              />
            </div>

            <div className="col-2">
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/7A_comoda.webp`}
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
