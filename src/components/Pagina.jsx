import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Pagina = (props) => {
  return (
    <div>
      <Header />
      <div className="py-3 text-white text-center mb-3 bg-dark">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Pagina;
