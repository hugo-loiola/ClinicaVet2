import Pagina from "@/components/Pagina";
import axios from "axios";
import { push } from "firebase/database";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [vacinasCaes, setVacinasCaes] = useState([]);
  const [vacinasGatos, setVacinasGatos] = useState([]);

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

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/vacinas/caes/${id}`);
      axios.delete(`/api/vacinas/gatos/${id}`);
      getAll();
    }
  }
  return (
    <Pagina titulo="Vacinas" footer="fixed">
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
                <tr key={item.id}>
                  <td>
                    <Link href={`/vacinas/caes/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.observacoes}</td>
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
                <tr key={item.id}>
                  <td>
                    <Link href={`/vacinas/gatos/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.observacoes}</td>
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
