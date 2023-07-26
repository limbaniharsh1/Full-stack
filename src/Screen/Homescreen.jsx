import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../Product'
import Productscreen from './Productscreen'

function Homescreen() {
  return (
    <div>
      <Row>
        {products.map((products,i)=>(
            <Col key={i} md={3}>
                <Productscreen products={products}/>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Homescreen
