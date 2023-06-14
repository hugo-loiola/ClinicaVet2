import Pagina from "@/components/Pagina";
import animaisValidators from "@/validators/animaisValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/animais", dados);
    push("/animais");
  }

  return (
    <Pagina titulo="Novo Animal">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Coloque o nome do bichinho"
              type="text"
              {...register("nome", animaisValidators.nome)}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="dataNascimento">
            <Form.Label>Data de Nascimento: </Form.Label>
            <Form.Control type="date" {...register("dataNascimento")} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              defaultValue="..."
              {...register("tipo", animaisValidators.tipo)}
            >
              <option>...</option>
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Ave</option>
            </Form.Select>
            {errors.tipo && <small></small>}
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
          </Form.Group>
        </Row>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend">Alergia</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Sim"
                name="formHorizontalRadios"
                id="sim"
                value="Sim"
                {...register("alergia")}
              />
              <Form.Check
                type="radio"
                label="Não"
                name="formHorizontalRadios"
                id="nao"
                value="Não"
                {...register("alergia")}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/animais"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
