import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
            style={{ border: "1px solid orange", borderRadius: "5px 0 5px 0" }}
          >
            <Link
              className="btn"
              style={{ backgroundColor: "orange" }}
              href={`${animais.id}/form`}
            >
              Editar
            </Link>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
