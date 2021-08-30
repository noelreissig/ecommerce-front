import React from "react";
import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <div className={heroStyles.homeImgBackground}>
        <div className={`${heroStyles.hero} container`}>
          <h1>Deco-Hack</h1>
          <p>
            Trabajamos para revolucionar el sector del mueble, el diseño y la
            decoración. Apostamos por darle una vuelta y ser la opción para
            inconformistas como tú, que buscan algo más.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
