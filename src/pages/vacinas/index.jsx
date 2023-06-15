import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [vacinasCaes, setVacinasCaes] = useState([]);
  const [vacinasGatos, setVacinasGatos] = useState([]);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/vacinas/caes").then((res) => {
      setVacinasCaes(res.data);
    });
    axios.get("/api/vacinas/gatos").then((res) => {
      setVacinasGatos(res.data);
    });
  }

  function excluir() {
    setShow(true);
  }
  return (
    <Pagina>
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
          <Link href={"/vacinas/caes/form"} className="btn btn-primary mb-2">
            Nova Vacina Canina
            <BsPlusCircle className="ms-1" />
          </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              {vacinasCaes.map((item) => (
                <tr>
                  <td>
                    <Link href={`/cursos/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.observacao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Link href={"/vacinas/gatos/form"} className="btn btn-primary mb-2">
            Nova Vacina Felina
            <BsPlusCircle className="ms-1" />
          </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              {vacinasGatos.map((item) => (
                <tr>
                  <td></td>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.observacao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Pagina>
  );
};
export default index;
