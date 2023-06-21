import Pagina from "@/components/Pagina";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

const schema = yup
  .object({
    animal: yup.string().required().notOneOf(["..."], "Animal Obrigatório"),
    cliente: yup.string().required().notOneOf(["..."], "Cliente Obrigatório"),
    veterinario: yup
      .string()
      .required()
      .notOneOf(["..."], "Veterinario Obrigatório"),
    preco: yup
      .number()
      .typeError("Somente Número")
      .required("Preço Obrigatório"),
    data: yup.date().required("Data Obrigatória").typeError("Data Inválida"),
    hora: yup.string().required("Hora Obrigatória"),
  })
  .required();

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [animal, setAnimal] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [veterinario, setVeterinario] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/animais").then((res) => {
      setAnimal(res.data);
    });
    axios.get("/api/clientes").then((res) => {
      setCliente(res.data);
    });
    axios.get("/api/veterinarios").then((res) => {
      setVeterinario(res.data);
    });
  }

  function salvar(dados) {
    axios.post("/api/consultas", dados);
    push("/consultas");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }
  return (
    <Pagina titulo="Nova Consulta" footer="fixed">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="animal">
            <Form.Label>Animal: </Form.Label>
            <Form.Select defaultValue="..." {...register("animal")}>
              <option>...</option>
              {animal.map((item) => (
                <option key={item.id}>{item.nome}</option>
              ))}
            </Form.Select>
            {errors.animal && (
              <small className="text-danger">{errors.animal.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="cliente">
            <Form.Label>Cliente: </Form.Label>
            <Form.Select defaultValue="..." {...register("cliente")}>
              <option>...</option>
              {cliente.map((item) => (
                <option key={item.id}>{item.nome}</option>
              ))}
            </Form.Select>
            {errors.cliente && (
              <small className="text-danger">{errors.cliente.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="veterinario">
            <Form.Label>Veterinário: </Form.Label>
            <Form.Select defaultValue="..." {...register("veterinario")}>
              <option>...</option>
              {veterinario.map((item) => (
                <option key={item.id}>{item.nome}</option>
              ))}
            </Form.Select>
            {errors.veterinario && (
              <small className="text-danger">
                {errors.veterinario.message}
              </small>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="preco">
            <Form.Label>Preço:</Form.Label>
            <Form.Control
              type="text"
              mask="99999"
              placeholder="R$ 0,00"
              {...register("preco")}
              onChange={handleChange}
            />
            {errors.preco && (
              <small className="text-danger">{errors.preco.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="data">
            <Form.Label>Data:</Form.Label>
            <Form.Control type="date" {...register("data")} />
            {errors.data && (
              <small className="text-danger">{errors.data.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="hora">
            <Form.Label>Hora:</Form.Label>
            <Form.Control type="time" {...register("hora")} />
            {errors.hora && (
              <small className="text-danger">{errors.hora.message}</small>
            )}
          </Form.Group>
        </Row>

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
