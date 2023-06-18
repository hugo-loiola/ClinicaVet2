import Loading from "@/components/Loading";
import MeuCard from "@/components/MeuCard";
import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const index = () => {
  const [veterinarios, setVeterinarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/veterinarios").then((res) => {
      setVeterinarios(res.data);
      setLoading(false);
    });
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Pagina titulo="Veterinarios">
          <Link href={"/veterinarios/form"} className="btn btn-primary mb-2">
            Novo
            <BsPlusCircle className="ms-1" />
          </Link>
          <Row>
            {veterinarios.map((item) => (
              <Col key={item.id}>
                <Link
                  href={`/veterinarios/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <MeuCard>
                    <Card.Img src={item.foto} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                    </Card.Body>
                  </MeuCard>
                </Link>
              </Col>
            ))}
          </Row>
        </Pagina>
      )}
    </>
  );
};

export default index;
