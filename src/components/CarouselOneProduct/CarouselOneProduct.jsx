import React from "react";
import { Carousel } from "react-bootstrap";
import carouselOneProductStyle from "./carouselOneProductStyle.module.css";

function CarouselOneProduct({ product }) {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className={`${carouselOneProductStyle.imgCarousel} w-100 `}
            src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/${product.picture_url}`}
            alt={product.name}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${carouselOneProductStyle.imgCarousel} w-100 `}
            src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/${product.picture_2_url}`}
            alt={product.name}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselOneProduct;
