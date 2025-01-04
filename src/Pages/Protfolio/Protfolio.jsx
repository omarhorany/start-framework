import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Protfolio() {
  return <>
<Container  className="justify-content-md-center">
      <Row>
          <Col  >
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
          </Col>
          <Col >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
          </Col>
          <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
          </Col>
      </Row>
    </Container>

 
     </>
}
