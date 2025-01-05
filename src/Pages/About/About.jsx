import React from 'react'
import { Col,Row ,Container} from 'react-bootstrap'
import styles from './About.module.css'
import { FaStar } from "react-icons/fa";


export default function About() {
  return <>
  <div className={styles.aboutCom}>
  <div> 
     <h1>ABOUT COMPONENT</h1>
  <div className="d-flex justify-content-center align-items-center w-50 m-auto ">
  <hr className="w-25 border border-2 border-white" />    
      <FaStar className="mx-3 " />
  <hr className="w-25 border border-2 border-white" /> 
   </div>
  <Container className=' text-start'>
    <Row className=' w-75 m-auto'>
      <Col className='m-3'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></Col>
      <Col className='m-3' ><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></Col>
    </Row>
  </Container>
    </div>
  </div>
  </>
}
