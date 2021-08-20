import React from "react";
import { Carousel } from "react-bootstrap";
import carouselOneProductStyle from "./carouselOneProductStyle.module.css";

function CarouselOneProduct() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className={`${carouselOneProductStyle.imgCarousel} w-100 `}
            src="../img/comedor/2A_mesa.webp"
            alt="2.mesa"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${carouselOneProductStyle.imgCarousel} w-100 `}
            src="../img/comedor/1A_mesa.webp"
            alt="1.mesa"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselOneProduct;
