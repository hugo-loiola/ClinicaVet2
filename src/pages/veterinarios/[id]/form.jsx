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
    nome: yup
      .string()
      .typeError("Somente Letras")
      .required("O Nome Obrigatório")
      .max(5, "maximo"),
    cpf: yup.string().required("CPF Obrigatório").min(14, "Preencha o CPF"),
    crmv: yup.string().required("CRMV Obrigatório"),
    salario: yup
      .number()
      .typeError("Somente Número")
      .required("Salario Obrigatório")
      .max(99999.99, "Máximo de R$99.999,99 de salário"),
    email: yup
      .string()
      .email("Use um email válido")
      .required("Email é Obrigatório"),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .min(5, "Mínimo de 5 caracteres"),
    cep: yup
      .string()
      .required("CEP Obrigatório")
      .min(9, "Maximo de 9 caracteres"),
    logradouro: yup
      .string()
      .required("Logradouro Obrigatório")
      .min(3, "Mínimo de 3 caracteres")
      .max(20, "Máximo de 20 caracteres"),
    complemento: yup.string().max(20, "Máximo de 20 caracteres"),
    numero: yup.number().typeError("Somente Número").max(999, "Máximo de 999"),
    bairro: yup.string().required().max(50, "Máximo de 50 caracteres"),
    foto: yup
      .string()
      .required("Foto Obrigatória")
      .min(5, "Mínimo de 5 caracteres")
      .url("Coloque uma URL válida"),
  })
  .required();

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [veterinario, setVeterinario] = useState([]);
  const [ddd, setDdd] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/veterinarios/${query.id}`).then((res) => {
        const disciplina = res.data;
        setVeterinario(res.data);

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/veterinarios/${dados.id}`, dados);
    push(`/veterinarios/${veterinario.id}`);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  const checkCEP = (e) => {
    if (!e.target.value) return;
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
        setDdd(data.ddd);
        setDisabled(true);
        setFocus("numero");
      });
  };

  return (
    <Pagina titulo="Editar Veterinario">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque seu Nome"
              {...register("nome")}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
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
            {errors.cpf && (
              <small className="text-danger">{errors.cpf.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="crmv">
            <Form.Label>CRMV: </Form.Label>
            <Form.Control
              type="text"
              placeholder="12.345"
              mask="99.999"
              {...register("crmv")}
              onChange={handleChange}
            />
            {errors.crmv && (
              <small className="text-danger">{errors.crmv.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="salario">
            <Form.Label>Salário: </Form.Label>
            <Form.Control
              type="number"
              placeholder="Coloque o Salário"
              {...register("salario")}
            />
            {errors.salario && (
              <small className="text-danger">{errors.salario.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              placeholder="exemplo@teste.com"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="90000-0000"
              mask={`(${ddd}) 99999-9999`}
              {...register("telefone")}
              onChange={handleChange}
            />
            {errors.telefone && (
              <small className="text-danger">{errors.telefone.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              placeholder="12345-678"
              type="text"
              {...register("cep")}
              onBlur={checkCEP}
            />
            {errors.cep && (
              <small className="text-danger">{errors.cep.message}</small>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              disabled={disabled}
              {...register("logradouro")}
            />
            {errors.logradouro && (
              <small className="text-danger">{errors.logradouro.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control type="text" {...register("complemento")} />
            {errors.complemento && (
              <small className="text-danger">
                {errors.complemento.message}
              </small>
            )}
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
            {errors.numero && (
              <small className="text-danger">{errors.numero.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              disabled={disabled}
              {...register("bairro")}
            />
            {errors.bairro && (
              <small className="text-danger">{errors.bairro.message}</small>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="uf">
            <Form.Label>UF: </Form.Label>
            <Form.Control type="text" disabled={disabled} {...register("uf")} />
            {errors?.uf && (
              <small className="text-danger">{errors.uf?.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="cidade">
            <Form.Label>Cidade: </Form.Label>
            <Form.Control
              type="text"
              disabled={disabled}
              {...register("cidade")}
            />
            {errors?.cidade && (
              <small className="text-danger">{errors.cidade?.message}</small>
            )}
          </Form.Group>
        </Row>
        <Form.Group controlId="foto" className="mb-3">
          <Form.Label>Foto: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Coloque sua Imagem"
            {...register("foto")}
          />
          {errors.foto && (
            <small className="text-danger">{errors.foto.message}</small>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link
            href={`/veterinarios/${veterinario.id}`}
            className="ms-2 btn btn-danger"
          >
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
