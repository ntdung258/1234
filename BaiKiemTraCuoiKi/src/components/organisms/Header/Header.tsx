import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <Navbar expand='lg' className={`${styles.mainNavBar}`}>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className={`${styles.btnToggleMenu}`} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`me-auto m-auto pt-3 pb-3 ${styles.mainNav}`}>
            <Nav.Link href='/' className={`${styles.active}`}>
              Home
            </Nav.Link>
            <Nav.Link href='#Genre'>Genre</Nav.Link>
            <Nav.Link href='#Country' className='me-3'>
              Country
            </Nav.Link>
            <Nav.Item className='position-relative d-flex align-items-center me-3'>
              <input type='text' className={`${styles.searchInput}`} placeholder='Search movies.......' />
              <div className={`position-absolute d-flex align-items-center ${styles.searchIcon}`}>
                <Image src='/assets/img/icon-search.svg' alt='Search' />
              </div>
            </Nav.Item>
            <Nav.Link href='#Movies'>Movies</Nav.Link>
            <Nav.Link href='#Series'>Series</Nav.Link>
            <Nav.Link href='#Animation' className='me-3'>
              Animation
            </Nav.Link>
            <Nav.Link href='#Login/Singup'>Login/Singup</Nav.Link>
            <Nav.Link href='#Ring'>
              <Image src='/assets/img/icon-ring.svg' alt='Ring' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
