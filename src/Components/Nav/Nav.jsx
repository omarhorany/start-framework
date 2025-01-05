import React from 'react';
import { Navbar, Container, Nav as BootstrapNav } from 'react-bootstrap';
import { Link ,NavLink } from 'react-router-dom'; 
import styles from './Nav.module.css'; 


export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.customNavbar}>
      <Container  className={styles.navLink}>
      <Link to="/" className={styles.navBrand}>
           <h1>START FRAMEWORK</h1>
          </Link>   
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className={styles.nasLinks}>
            <NavLink as={Link} to="/about" className='text-white nav-link '>ABOUT</NavLink>
            <NavLink as={Link} to="/protfolio" className='text-white nav-link'>PROTFOLIO</NavLink>
            <NavLink as={Link} to="/contact" className='text-white nav-link'>CONTACT</NavLink>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}