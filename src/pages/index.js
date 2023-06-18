import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import Loading from "@/components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAll();
  }, []);
  function getAll() {
    fetch(
      "://www.petz.com.br/blog/wp-content/uploads/2021/04/cachorro-sente-flta-dono-02.jpg"
    ).then(() => {
      setLoading(false);
    });
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Pagina titulo="AmeVet">
          <section className="mt-5">
            <Row>
              <Col md={6}>
                <h2>
                  Seu parceiro de confiança para cuidados de animais de
                  estimação
                </h2>
                <p>
                  Bem-vindo à AmeVet! Nossa equipe de médicos veterinários
                  altamente qualificados está aqui para fornecer os melhores
                  cuidados para o seu animal de estimação.
                </p>
                <p>
                  Oferecemos uma ampla gama de serviços, incluindo consultas,
                  vacinas, cirurgias, exames laboratoriais e muito mais.
                </p>
                <Link href={"/consultas/form"} className="btn btn-primary">
                  Agendar Consulta
                </Link>
              </Col>
              <Col md={6}>
                <img
                  src="https://www.petz.com.br/blog/wp-content/uploads/2021/04/cachorro-sente-flta-dono-02.jpg"
                  alt="Clínica Veterinária"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </section>
        </Pagina>
      )}
    </div>
  );
}
export default App;
