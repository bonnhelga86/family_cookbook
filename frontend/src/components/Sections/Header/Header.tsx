import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(
  {
    isLoggedIn,
    handleLogout
  }: {
    isLoggedIn: Boolean,
    handleLogout: React.MouseEventHandler<HTMLButtonElement>
  }
) {
  return (
    <header className="header">
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/">Family CookBook</Navbar.Brand>
          <Nav className="header__menu">
            {isLoggedIn && <Nav.Link className="header__link" as={Link} to="/recipes">Меню</Nav.Link>}
            <Nav.Link className="header__link" as={Link} to="/recipes">Рецепты</Nav.Link>

            {isLoggedIn
            ? <Nav.Link className="header__link" as={Link} to="/profile">Профиль</Nav.Link>
            : <Nav.Link className="header__link" as={Link} to="/signin">Войти</Nav.Link>
            }

            {isLoggedIn && <button className="header__button" onClick={handleLogout} />}
          </Nav>
          <div className="header__burger"></div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
