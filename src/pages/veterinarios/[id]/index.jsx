import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [veterinario, setCliente] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/veterinarios/${query.id}`).then((res) => {
        setCliente(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={veterinario.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {veterinario.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tenha certeza disso, após essa ação <strong>Veterinário(a)</strong>{" "}
          será exluido para sempre!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/veterinarios/${veterinario.id}`);
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
            <Card.Img src={veterinario.foto} />
          </Card>
        </Col>
        <Col>
          <h3>Informações:</h3>
          <div
            style={{ border: "1px solid orange", borderRadius: "5px" }}
            className="p-3"
          >
            <p>CRMV: {veterinario.crmv}</p>
            <p>CPF: {veterinario.cpf}</p>
            <p>CEP: {veterinario.cep}</p>
            <p>Data de Nascimento: {veterinario.dataNascimento}</p>
            <p>Email: {veterinario.email}</p>
            <p>Telefone: {veterinario.telefone}</p>
            <p>Logradouro: {veterinario.logradouro}</p>
            <p>Bairro: {veterinario.bairro}</p>
            <p>Número: {veterinario.numero}</p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "orange" }}
                  href={`${veterinario.id}/form`}
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
