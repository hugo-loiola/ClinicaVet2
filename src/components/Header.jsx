import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ active }) => {
  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg" bg="black">
        <Container>
          <Navbar.Brand href="/">Lan House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link {...active} href="/clientes">
                Clientes
              </Nav.Link>
              <Nav.Link href="/computadores">Computadores</Nav.Link>
              <Nav.Link href="/funcionarios">Funcionarios</Nav.Link>
              <Nav.Link href="/marcas">Marcas</Nav.Link>
              <Nav.Link href="/provedores">Provedores</Nav.Link>
              <Nav.Link href="/vendas">Vendas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
