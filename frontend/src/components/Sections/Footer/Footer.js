import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss';

function Footer() {

  return (
    <footer className="footer">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
            Copyright &copy; 2023
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
