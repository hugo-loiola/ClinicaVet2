import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/clientes/${query.id}`).then((res) => {
        const disciplina = res.data;
        setCliente(res.data);

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  const [animal, setAnimal] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/animais").then((res) => {
      setAnimal(res.data);
    });
  }

  function salvar(dados) {
    axios.put(`/api/clientes/${dados.id}`, dados);
    push(`/clientes/${cliente.id}`);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Editar Cliente">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque seu Nome"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="123.456.789.09"
              mask="999.999.999-99"
              {...register("cpf")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="animal">
            <Form.Label>Animal: </Form.Label>
            <Form.Select {...register("animal")}>
              {animal.map((item) => (
                <option key={item.id}>{item.nome}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              placeholder="exemplo@teste.com"
              type="email"
              {...register("email", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="tel"
              placeholder="(01) 23456-78909"
              mask="(99) 99999-9999"
              {...register("telefone")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              placeholder="12345-678"
              type="text"
              mask="99999-999"
              {...register("cep")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              {...register("logradouro", { maxLength: 100 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              {...register("complemento", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              mask="999"
              {...register("numero")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control type="text" {...register("bairro")} />
          </Form.Group>
        </Row>
        <Form.Group controlId="foto" className="mb-3">
          <Form.Label>Foto: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Coloque sua Imagem"
            {...register("foto")}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/alunos"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
