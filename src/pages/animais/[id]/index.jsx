import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/animais/${query.id}`).then((res) => {
        setAnimais(res.data);
      });
    }
  }, [query.id]);

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/animais/${id}`);
      push("/animais");
    }
  }

  return (
    <Pagina titulo={animais.nome}>
      <Row>
        <Col>
          <Card>
            <Card.Img src={animais.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>
          <div
            style={{ border: "1px solid orange", borderRadius: "5px" }}
            className="p-3"
          >
            <p>Dono(a): {animais.dono}</p>
            <p>Tipo: {animais.tipo}</p>
            <p>Raça: {animais.raca}</p>
            <p>
              Data de Nascimento:{" "}
              {new Date(animais.dataNascimento).toLocaleDateString()}
            </p>
            <p>Peso: {animais.peso}</p>
            <p>Altura: {animais.altura}</p>
            <p>Alergico: {animais.alergia}</p>
            <Link
              className="btn"
              style={{ backgroundColor: "orange" }}
              href={`${animais.id}/form`}
            >
              Editar
            </Link>
            <Button
              onClick={() => excluir(animais.id)}
              className="btn btn-danger"
            >
              Excluir
            </Button>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
