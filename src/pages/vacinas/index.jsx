import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

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
  }
  return (
    <Pagina>
      <Row>
        <Col>
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
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.observacao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
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
