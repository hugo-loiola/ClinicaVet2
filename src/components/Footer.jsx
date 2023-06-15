import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineMail, MdPlace, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        width: "100%",
        backgroundColor: "orange",
      }}
      className="position-fixed bottom-0 py-3 text-center"
    >
      <Row>
        <Col>
          <h3 className="mb-3">Nos encontre</h3>
          <Link
            href="https://www.google.com/maps/dir//Centro%20Universit%C3%A1rio%20IESB%20-%20Campus%20Ceil%C3%A2ndia"
            target="_blank"
            style={{ color: "black" }}
          >
            <MdPlace size={"50"} />
          </Link>
          <Col className="mt-3">
            Ceilândia Norte QNN 31 Distrito Federal, Brasília - DF, 72225-315
          </Col>
        </Col>
        <Col>
          <h4>AMEVET | CLÍNICA VETERINÁRIA </h4>Amor e Dedicação para seu melhor
          amigo… Aguardamos a sua visita!
        </Col>
        <Col>
          <h3>Converse Conosco</h3>
          <Col className="my-3">
            <a
              href="https://wa.me/5561991862235"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MdWhatsapp size={"25"} /> (61) 99186-2235
            </a>
          </Col>
          <a
            href="mailto:hugoqueiroz2412@gmail.com?subject=Conversa"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MdOutlineMail size={"25"} /> amevet@gmail.com
          </a>
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
