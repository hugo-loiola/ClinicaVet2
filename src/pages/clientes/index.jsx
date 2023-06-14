import MeuCard from "@/components/MeuCard";
import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const index = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/clientes").then((res) => {
      setClientes(res.data);
    });
  }

  return (
    <Pagina titulo="Clientes">
      <Link href={"/clientes/form"} className="btn btn-primary mb-2">
        Novo
        <BsPlusCircle className="ms-1" />
      </Link>
      <Row>
        {clientes.map((item) => (
          <Col key={item.id}>
            <Link
              href={`/clientes/${item.id}`}
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
  );
};

export default index;
