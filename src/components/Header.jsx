import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              rel="icon"
              src="../img/Logo.jpeg"
              style={{ width: "15vh" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/animais">Animais</Nav.Link>
              <Nav.Link href="/clientes">Clientes</Nav.Link>
              <Nav.Link href="/consultas">Consultas</Nav.Link>
              <Nav.Link href="/herbivoros">Herbivoros</Nav.Link>
              <Nav.Link href="/vacinas">Vacinas</Nav.Link>
              <Nav.Link href="/veterinarios">Veterinários</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
