import React from "react";
import { Card, Button } from "react-bootstrap";
import cardByCategoryStyles from "../CardByCategory/cardByCategory.module.css";

function CardByCategory() {
  return (
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
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-secondary" className="rounded-pill">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardByCategory;
