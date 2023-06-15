import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [veterinarios, setVeterinarios] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/veterinarios/${query.id}`).then((res) => {
        setVeterinarios(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={veterinarios.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {veterinarios.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tenha certeza disso, após essa ação o <strong>Veterinário</strong>{" "}
          será exluido para sempre!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/veterinarios/${veterinarios.id}`);
              push("/veterinarios");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={veterinarios.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>
          <div
            style={{ border: "1px solid orange", borderRadius: "5px" }}
            className="p-3"
          >
            <p>Animais: {veterinarios.animal}</p>
            <p>CPF: {veterinarios.cpf}</p>
            <p>CEP: {veterinarios.cep}</p>
            <p>Data de Nascimento: {veterinarios.dataNascimento}</p>
            <p>Email: {veterinarios.email}</p>
            <p>Telefone: {veterinarios.telefone}</p>
            <p>Logradouro: {veterinarios.logradouro}</p>
            <p>Bairro: {veterinarios.bairro}</p>
            <p>Número: {veterinarios.numero}</p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "orange" }}
                  href={`${veterinarios.id}/form`}
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
