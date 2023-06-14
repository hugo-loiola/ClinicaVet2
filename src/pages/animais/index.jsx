import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/animais").then((res) => {
      setAnimais(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/animais/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="Animais">
      <Link href={"/animais/form"} className="btn btn-primary mb-2">
        Novo
        <BsPlusCircle className="ms-1" />
      </Link>
      <Row>
        {animais.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img src={item.foto} />
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
