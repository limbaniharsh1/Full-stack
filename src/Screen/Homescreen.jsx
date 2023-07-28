import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import products from "../Product";
import Productscreen from "./Productscreen";
import axios from "axios";

function Homescreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get("http://localhost:8000/products");
      setProducts(data);
    };
    fetchproduct();
  }, []);

  console.log(products);
  return (
    <div>
      <Row>
        {products.map((products, i) => (
          <Col key={i} md={3}>
            <Productscreen products={products} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;
