import React from "react";
import { Card } from "react-bootstrap";
import cardOrders from "./cardOrders.module.css";
import moment from "moment";

const CardOrders = ({ order }) => {
  return (
    <div className="shadow">
      <Card>
        <Card.Body>
          <div className={`${cardOrders.styles}`}>
            <strong> Fecha de compra: </strong>
            {moment(`${order.createdAt}`).format("DD/MM/YYYY")}
          </div>
          <div>
            <strong> Fecha de entrega: </strong>
            {moment(`${order.deliveryDate}`).format("DD/MM/YYYY")}
          </div>
          <div>
            {" "}
            <strong> Estado: </strong> {order.status}
          </div>
          <div>
            <strong>Cantidad de productos: </strong> {order.products.length}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardOrders;
