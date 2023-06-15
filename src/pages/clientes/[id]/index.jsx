import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [cliente, setCliente] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/clientes/${query.id}`).then((res) => {
        setCliente(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={cliente.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {cliente.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tenha certeza disso, após essa ação o <strong>Cliente</strong> será
          exluido para sempre!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/clientes/${cliente.id}`);
              push("/clientes");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={cliente.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>
          <div
            style={{ border: "1px solid orange", borderRadius: "5px" }}
            className="p-3"
          >
            <p>Animais: {cliente.animal}</p>
            <p>CPF: {cliente.cpf}</p>
            <p>CEP: {cliente.cep}</p>
            <p>Data de Nascimento: {cliente.dataNascimento}</p>
            <p>Email: {cliente.email}</p>
            <p>Telefone: {cliente.telefone}</p>
            <p>Logradouro: {cliente.logradouro}</p>
            <p>Bairro: {cliente.bairro}</p>
            <p>Número: {cliente.numero}</p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "orange" }}
                  href={`${cliente.id}/form`}
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
