import React from 'react';
import { Navbar, Container, Nav as BootstrapNav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import styles from './Nav.module.css'; 


export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.customNavbar}>
      <Container  className={styles.navLink}>
        <Navbar.Brand as={Link} to="/" className={styles.navBrand} >START FRAMEWORK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className={styles.nasLinks}>
            <BootstrapNav.Link as={Link} to="/about" className='text-white nav-link '>ABOUT</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/protfolio" className='text-white nav-link'>PROTFOLIO</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/contact" className='text-white nav-link'>CONTACT</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}