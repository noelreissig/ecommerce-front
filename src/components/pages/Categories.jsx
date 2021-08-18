import React from "react";
import NavComponent from "../Navbar";
import Hero from "../Hero";
import CardByCategory from "../CardByCategory";
import Footer from "../Footer";

import categoriesStyles from "./categories.module.css";

function Home() {
  return (
    <div>
      <NavComponent />
      <Hero />

      <div className={`${categoriesStyles.stylesCategories} container`}>
        <div className="row">
          <div className="col-md-3 ">
            <CardByCategory />
          </div>
          <div className="col-md-3">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>{" "}
          <div className="col-md-3 ">
            <CardByCategory />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
