import React from "react";
import NavComponent from "../../Navbar/Navbar";
import Hero from "../../Hero/Hero";
import Footer from "../../Footer/Footer";
import categoriesStyles from "./categories.module.css";
import { Card, Button } from "react-bootstrap";
import cardByCategoryStyles from "../../CardByCategory/cardByCategory.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Categories() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/api/product/${categoryId}`,
      });
      setCategory(response.data);
    };
    getCategory();
  }, []);

  return (
    <div>
      <NavComponent />
      <Hero />

      <div className={`${categoriesStyles.stylesCategories} container`}>
        <div className="row">
          <div className="col-md-3 ">
            <Link
              to="/producto/mesa-redonda"
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
                    <Card.Title>Mesa de comedor redonda</Card.Title>
                    <Card.Text>(precio)</Card.Text>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
