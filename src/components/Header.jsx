import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <div>
      <Navbar
        variant="light"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#0D8CFF" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ width: "100px" }}
              src="https://media.discordapp.net/attachments/986769752653434981/1119407200713048254/minhalogo.png"
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
