import Info from "@/components/Info";
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
    <Pagina titulo={animais.nome} footer="fixed">
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
          <Card style={{ height: "15rem" }}>
            <Card.Img src={animais.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>
          <Info>
            <Row>
              <Col>
                <p>
                  <strong>Dono(a):</strong> {animais.dono}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Tipo:</strong> {animais.tipo}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Raça:</strong> {animais.raca}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Data de Nascimento:</strong> {animais.dataNascimento}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Peso:</strong> {animais.peso}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Altura:</strong> {animais.altura}
                </p>
              </Col>
            </Row>
            <p>
              <strong>Alergico:</strong> {animais.alergia}
            </p>
            <div className="text-center">
              <Link
                className="btn"
                style={{ backgroundColor: "#0D8CFF" }}
                href={`${animais.id}/form`}
              >
                Editar
              </Link>

              <Button onClick={excluir} className="btn btn-danger ms-2">
                Excluir
              </Button>
            </div>
          </Info>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
