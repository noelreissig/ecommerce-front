import React from "react";
import NavComponent from "../../Navbar/Navbar";
import Hero from "../../Hero/Hero";
import Footer from "../../Footer/Footer";
import categoriesStyles from "./category.module.css";
import { Card, Button } from "react-bootstrap";
import cardByCategoryStyles from "../../CardByCategory/cardByCategory.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Categories() {
  const { categories } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/api/product/category/${categories}`,
      });
      setCategory(response.data);
    };
    getCategory();
  }, []);
  // console.log(category);

  return (
    <div>
      <NavComponent />
      <Hero />

      <div className={`${categoriesStyles.stylesCategories} container`}>
        <div className="row">
          {category &&
            category.map((eachProduct) => (
              <div className="col-md-3 " key={eachProduct.name}>
                <Link
                  to={`/producto/${eachProduct.slug}`}
                  className={categoriesStyles.linkDecoration}
                >
                  <div>
                    <Card
                      className={`${cardByCategoryStyles.cardHover} shadow my-4 mx-3 d-flex text-align-center`}
                    >
                      <Card.Img
                        variant="top"
                        className={cardByCategoryStyles.images}
                        src="../img/comedor/4A_mesa.webp"
                      />
                      <Card.Body>
                        <Card.Title> {eachProduct.name} </Card.Title>
                        <Card.Text> USD {eachProduct.price}</Card.Text>
                        <Button
                          variant="outline-secondary"
                          className="rounded-pill"
                        >
                          Ver más
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
