import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
      </Card>
    </div>
  );
};

export default Product;
