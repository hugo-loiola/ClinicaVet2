import Loading from "@/components/Loading";
import MeuCard from "@/components/MeuCard";
import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const index = () => {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/animais").then((res) => {
      setAnimais(res.data);
      setLoading(false);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/animais/${id}`);
      getAll();
    }
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Pagina titulo="Animais">
          <Link href={"/animais/form"} className="btn btn-primary mb-2">
            Novo
            <BsPlusCircle className="ms-1" />
          </Link>
          <Row>
            {animais.map((item) => (
              <Col key={item.id}>
                <Link
                  href={`/animais/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <MeuCard>
                    <Card.Img src={item.foto} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                    </Card.Body>
                  </MeuCard>
                </Link>
              </Col>
            ))}
          </Row>
        </Pagina>
      )}
    </div>
  );
};

export default index;
