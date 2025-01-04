import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return <>
  <div className={styles.customFooter}>
  <Container >
      <Row >
        <Col>
        <h1>LOCATION</h1>
        <p>2215 John Daniel Drive
           Clark, MO 65243</p>
        </Col>
        <Col>
        <h1>AROUND THE WEB</h1>
        <ul className={styles.fontIcon}>
          <li className={styles.liIcon}><FontAwesomeIcon icon={faFacebook} /></li>
          <li className={styles.liIcon}><FontAwesomeIcon icon={faInstagram} /></li>
          <li className={styles.liIcon}><FontAwesomeIcon icon={faLinkedin} /></li>
          <li className={styles.liIcon}><FontAwesomeIcon icon={faTwitter} /></li>
        </ul>
        </Col>
        <Col>
        <h1>ABOUT FREELANCER</h1>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </Col>
      </Row>
    </Container>
  </div>
      <Row className={styles.lastRow}>
        <p className='m-auto'>Copyright © Your Website 2021</p>
      </Row>
  
  </>
}
