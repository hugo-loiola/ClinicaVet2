import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        width: "100%",
        borderTop: "5px solid orange",
      }}
      className="bottom-0 py-3 text-center"
    >
      <Row>
        <Col md={3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1536184503902!2d-48.12616322396138!3d-15.795851884844724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcb8115bc6165%3A0x9ddf0cf83dbc3b8a!2sSt.%20O%20Qno%203%20Conjunto%20H%20-%20St.%20O%20QNO%203%20Conj.%20H%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%20-%20DF%2C%2072250-308!5e0!3m2!1spt-BR!2sbr!4v1686759734605!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col md={6}>
          <h3>Nos encontre</h3>
        </Col>
      </Row>
      <p>
        Todos os direitos reservados® Feito por{" "}
        <a
          href="https://github.com/hugo-loiola"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Hugo
        </a>
      </p>
    </Container>
  );
};

export default Footer;
