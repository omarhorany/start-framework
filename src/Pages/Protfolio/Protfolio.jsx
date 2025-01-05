import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image1 from '../../assets/poert1.png'
import Image2 from '../../assets/port2.png'
import Image3 from '../../assets/port3.png'
import { FaPlus } from 'react-icons/fa'; 

export default function Protfolio() {
  return <>
 <div className="container">
      <Row className="justify-content-center my-5">
        <Col xs="auto">
          <div className="hover-card ">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image1} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
        <Col xs="auto">
          <div className="hover-card">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image2} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
        <Col xs="auto">
          <div className="hover-card">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image3} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs="auto">
          <div className="hover-card ">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image1} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
        <Col xs="auto">
          <div className="hover-card">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image2} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
        <Col xs="auto">
          <div className="hover-card">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Image3} />
            </Card>
            <div className="overlay">
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
     </>
}
