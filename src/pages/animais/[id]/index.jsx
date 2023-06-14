import MeuCard from "@/components/MeuCard";
import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";

const index = () => {
  const { push, query } = useRouter();
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get(`/api/animais/${query.id}`).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <Pagina titulo="Animais">
      <Row>
        <Col>
          <MeuCard>
            <Card.Img src={animais.foto} />
            <Card.Body>
              <Card.Title>{animais.nome}</Card.Title>
            </Card.Body>
          </MeuCard>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
