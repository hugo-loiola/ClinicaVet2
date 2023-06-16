import Pagina from "@/components/Pagina";
import vacinasValidators from "@/validators/vacinasValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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

  function salvar(dados) {
    axios.post("/api/vacinas/caes", dados);
    push("/vacinas");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Nova Vacina Canina" footer="fixed">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque o Nome"
              {...register("nome", vacinasValidators.nome)}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="tipo">
            <Form.Label>Tipo: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipo de Vacina"
              {...register("tipo", vacinasValidators.tipo)}
            />
            {errors.tipo && (
              <small className="text-danger">{errors.tipo.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="observacoes">
            <Form.Label>Observações: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Efeitos colaterais, tempo, etc..."
              {...register("observacoes", vacinasValidators.observacoes)}
            />
            {errors.observacoes && (
              <small className="text-danger">
                {errors.observacoes.message}
              </small>
            )}
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/vacinas"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
