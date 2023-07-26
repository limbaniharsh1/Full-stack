import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
// import products from "../Product";

const Productscreen = ({ products }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`products/${products._id}`}>
          <Card.Img src={products.image} variant="top" />
        </Link>
        <Card.Body>
          <a href={`products/${products._id}`}>
            <Card.Title as="div">
              <strong>{products.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={products.rating}
                text={`${products.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text>${products.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productscreen;
