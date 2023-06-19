import Pagina from "@/components/Pagina";
import animaisValidators from "@/validators/animaisValidators";
import axios from "axios";
import { ref } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [dono, setDono] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/clientes").then((res) => {
      setDono(res.data);
    });
  }
  function salvar(dados) {
    axios.post("/api/animais", dados);
    push("/animais");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
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
          <Form.Group as={Col} controlId="data">
            <Form.Label>Data de nascimento: </Form.Label>
            <Form.Control
              placeholder="24/12/2002"
              type="text"
              {...register("data", animaisValidators.nascimento)}
            />
            {errors.nascimento && (
              <small className="text-danger">{errors.nascimento.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="tipo">
            <Form.Label>Tipo:</Form.Label>
            <Form.Select
              defaultValue="..."
              {...register("tipo", animaisValidators.tipo)}
            >
              <option>...</option>
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Ave</option>
            </Form.Select>
            {errors.tipo && <small>{errors.tipo.message}</small>}
          </Form.Group>

          <Form.Group as={Col} controlId="raca">
            <Form.Label>Raça:</Form.Label>
            <Form.Control
              placeholder="Coloque a raça do bichinho"
              {...register("raca", animaisValidators.raca)}
            ></Form.Control>
            {errors.raca && (
              <small className="text-danger">{errors.raca.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlid="dono">
            <Form.Label>Dono: </Form.Label>
            <Form.Select defaultValue="..." {...register("dono")}>
              {dono.map((item) => (
                <option key={item.id}>{item.nome}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group controlId="foto" className="mb-3">
          <Form.Label>Coloque a Imagem</Form.Label>
          <Form.Control
            type="text"
            placeholder="link da imagem"
            {...register("foto", animaisValidators.foto)}
          />
          {errors.foto && (
            <small className="text-danger">{errors.foto.message}</small>
          )}
        </Form.Group>

        <Row>
          <Col>
            <Form.Label>Peso: </Form.Label>
            <InputGroup controlId="peso" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Peso em Gramas"
                mask="9,99"
                {...register("peso", animaisValidators.peso)}
                onChange={handleChange}
              />
              <InputGroup.Text id="peso">g</InputGroup.Text>
            </InputGroup>
            {errors.peso && (
              <small className="text-danger">{errors.peso.message}</small>
            )}
          </Col>
          <Col>
            <Form.Label>Altura: </Form.Label>
            <InputGroup controlId="altura" className="mb-3">
              <Form.Control
                type="text"
                mask="99,99"
                placeholder="Altura em Centímetros"
                {...register("altura", animaisValidators.altura)}
                onChange={handleChange}
              />
              <InputGroup.Text id="peso">cm</InputGroup.Text>
            </InputGroup>
            {errors.altura && (
              <small className="text-danger">{errors.altura.message}</small>
            )}
          </Col>
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
