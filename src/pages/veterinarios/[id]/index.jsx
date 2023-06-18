import Info from "@/components/Info";
import Loading from "@/components/Loading";
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
  const [loading, setLoading] = useState(true);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <Pagina titulo={veterinario.nome}>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Deseja Exlcuir {veterinario.nome}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Tenha certeza disso, após essa ação o <strong>Veterinário</strong>{" "}
              será exluido para sempre!
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ backgroundColor: "#0D8CFF" }}
                onClick={handleClose}
              >
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
              <Info>
                <Row>
                  <Col>
                    <p>
                      <strong>CRMV:</strong> {veterinario.crmv}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>CPF:</strong> {veterinario.cpf}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>CEP:</strong> {veterinario.cep}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Data de Nascimento:</strong>{" "}
                      {veterinario.dataNascimento}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>Email:</strong> {veterinario.email}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Telefone:</strong> {veterinario.telefone}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>Logradouro:</strong> {veterinario.logradouro}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Bairro:</strong> {veterinario.bairro}
                    </p>
                  </Col>
                </Row>
                <p>
                  <strong>Número:</strong> {veterinario.numero}
                </p>
                <div className="text-center">
                  <Link
                    className="btn"
                    style={{ backgroundColor: "#0D8CFF" }}
                    href={`${veterinario.id}/form`}
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
      )}
    </>
  );
};

export default index;
