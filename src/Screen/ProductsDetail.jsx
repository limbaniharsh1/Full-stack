import React from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../Product";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import products from "../Product";
import { ArrowBarLeft, ArrowLeft, Back } from "react-bootstrap-icons";

const ProductsDetail = () => {
  let { id } = useParams();
  let pro;
  let getdata = async () => {
    pro = products.find((p) => p._id === id);
    console.log(pro);
  };
  getdata();
  return (
    <div>
      <Row>
        <Link className="text-decoration-none py-2 btn-light" to='/'><ArrowLeft fontSize={`18px`}/> : go back</Link>
        <Col md={6}>
          <Image src={pro.image} alt="product" fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{pro.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={pro.rating} text={`${pro.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>Price : ${pro.price}</ListGroupItem>
            <ListGroupItem>Price : ${pro.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3} className="text-center">
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Status : </Col>
                <Col>{pro.countInStock > 0 ? "In Stock" : `Out Of Stock`}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="d-block">
              <Button className="btn-block" type="button">
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsDetail;
