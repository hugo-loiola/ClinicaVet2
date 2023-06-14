import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Pagina = (props) => {
  return (
    <div>
      <Header />

      <Container
        fluid
        className="py-3 text-center mb-3"
        style={{ border: "5px solid orange" }}
      >
        <h1>{props.titulo}</h1>
      </Container>

      <Container className="mb-5 pb-3">{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Pagina;
