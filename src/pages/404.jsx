import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const index = () => {
  const [imagem, setImagem] = useState("");
  function pegar() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setImagem(res.data.message);
    });
  }

  useEffect(() => {
    pegar();
  }, []);

  return (
    <Row className="text-center p-3">
      <h1>404</h1>
      <p>Infelizmente esta Página nao existe</p>
      <div className="m-3">
        <img src={`${imagem}`} alt="Cachorrinho" rel="image" />
      </div>
      <Col>
        <Link href={"/"} className="btn btn-primary">
          Voltar
        </Link>
      </Col>
    </Row>
  );
};

export default index;
