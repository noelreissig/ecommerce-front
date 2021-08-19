import React from "react";
import heroStyles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <div className={heroStyles.homeImgBackground}>
        <div className={`${heroStyles.hero} container`}>
          <h1>Deco-Hack</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde debitis, exercitationem inventore nemo praesentium. Corporis
            asperiores.
          </p>
          <button className="btn btn-light rounded-pill ">
            <span className="px-2"> Ver destacados </span>
            <i className="fas fa-arrow-right  pe-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
