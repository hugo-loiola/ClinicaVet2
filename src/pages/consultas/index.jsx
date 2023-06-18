import Loading from "@/components/Loading";
import Pagina from "@/components/Pagina";
import axios from "axios";
import { push } from "firebase/database";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/consultas").then((res) => {
      setConsultas(res.data);
      setLoading(false);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/consultas/${id}`);

      getAll();
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Pagina titulo="Consultas" footer="fixed">
          <Row>
            <Col>
              <Link href={"/consultas/form"} className="btn btn-primary mb-2">
                Nova Consulta
                <BsPlusCircle className="ms-1" />
              </Link>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Animal</th>
                    <th>Cliente</th>
                    <th>Veterinario</th>
                    <th>Data</th>
                    <th>Hora</th>
                  </tr>
                </thead>
                <tbody>
                  {consultas.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Link href={`/consultas/${item.id}`}>
                          <BsFillPencilFill className="me-2 text-primary" />
                        </Link>
                        <BsFillTrashFill
                          onClick={() => excluir(item.id)}
                          className="text-danger"
                        />
                      </td>
                      <td>{item.animal}</td>
                      <td>{item.cliente}</td>
                      <td>{item.veterinario}</td>
                      <td>{item.data}</td>
                      <td>{item.hora}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Pagina>
      )}
    </>
  );
};
export default index;
