import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [animais, setAnimais] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/animais/${query.id}`).then((res) => {
        setAnimais(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={animais.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {animais.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tenha certeza disso, após essa ação o animal será exluido para sempre!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/animais/${animais.id}`);
              push("/animais");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
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
            <p>Data de Nascimento: {animais.dataNascimento}</p>
            <p>Peso: {animais.peso}</p>
            <p>Altura: {animais.altura}</p>
            <p>Alergico: {animais.alergia}</p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "orange" }}
                  href={`${animais.id}/form`}
                >
                  Editar
                </Link>
              </Col>
              <Col>
                <Button onClick={excluir} className="btn btn-danger">
                  Excluir
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
