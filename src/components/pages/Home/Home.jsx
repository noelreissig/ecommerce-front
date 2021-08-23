import React from "react";
import CarouselDestacado from "../../CarouselDestacado";
import Hero from "../../Hero/Hero";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import homeStyles from "./home.module.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(`http://localhost:3001/api/category`);
      setCategories(response.data);
    };
    getCategories();
  }, []);
  // console.log(categories);
  return (
    <div>
      <NavComponent />
      <Hero />
      <div className="container">
        <h2 className="py-5 text-center">
          ¡Te ayudamos a transformar tu hogar!
        </h2>
        <div className="row g-0 d-flex justify-content-center pb-4">
          {categories.map((category) => (
            <div className="col-sm-3 mx-3 pb-3" key={category.id}>
              <Link
                to={`${category.name}`}
                className={homeStyles.linkDecoration}
              >
                <div className={homeStyles.cardCategory}>
                  <img
                    className={`img-fluid rounded shadow`}
                    src={category.photo_url}
                    alt="comedor"
                  />

                  <h3 className="pt-2">{category.name}</h3>
                </div>
              </Link>
            </div>
          ))}
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
