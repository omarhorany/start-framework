import React from 'react'
import { Col,Row ,Container} from 'react-bootstrap'
import styles from './About.module.css'

export default function About() {
  return <>
  <div className={styles.aboutCom}>
  <div>  <h1>ABOUT COMPONENT</h1>
  <Container>
    <Row className='mt-5'>
      <Col><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></Col>
      <Col><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></Col>
    </Row>
  </Container>
    </div>
  </div>
  </>
}
