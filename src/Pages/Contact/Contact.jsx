import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './Contact.module.css'


export default function Contact() {
  return <>
<div className={'text-center p-5'}><h1>CONTACT SECTION</h1></div>


  <Container className={styles.customRow}>
 <InputGroup className="mb-4"  size="lg">
        <Form.Control
          placeholder="User Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className={styles.customInput} 
        />
      </InputGroup>

      <InputGroup className="mb-4" size="lg">
        <Form.Control
          placeholder="User Age"
          aria-label="User Age"
          aria-describedby="basic-addon2"
          className={styles.customInput} 

        />
      </InputGroup>

      <InputGroup className="mb-4" size="lg">
        <Form.Control
          placeholder="User Email"
          aria-label="User Email"
          aria-describedby="basic-addon2"
          className={styles.customInput} 

        />
      </InputGroup>

      <InputGroup className="mb-5" size="lg">
        <Form.Control
          placeholder="User Password"
          aria-label="User Password"
          aria-describedby="basic-addon2"
          className={styles.customInput} 

        />
      </InputGroup>

      <Button className='mb-5 bg-primary text-white' variant="outline-secondary" id="button-addon2">
          Send Message
        </Button>

  </Container>

  </>
}


