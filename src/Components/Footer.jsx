import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Container>
            <Row md={12}>
                <span className='text-center'>copyright 2021</span>
            </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
