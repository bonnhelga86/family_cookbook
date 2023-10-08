import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Family CookBook</Navbar.Brand>
          <Nav>
            <Nav.Link className="header__link" as={Link} to="/recipes">Меню</Nav.Link>
            <Nav.Link className="header__link" as={Link} to="/recipes">Рецепты</Nav.Link>
            <Nav.Link className="header__link" as={Link} to="/profile">Профиль</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
