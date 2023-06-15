import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar
        variant="light"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "orange" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              rel="icon"
              src="https://www.zarla.com/images/zarla-benjivet-1x1-2400x2400-20211217-ytr7mb8jqcwv3xqc47vf.png?crop=1:1,smart&width=250&dpr=2"
              style={{ width: "10vh" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/animais">Animais</Nav.Link>
              <Nav.Link href="/clientes">Clientes</Nav.Link>
              <Nav.Link href="/consultas">Consultas</Nav.Link>
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
