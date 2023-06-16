const vacinasValidators = {
  nome: {
    required: "O Nome é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 20, message: "O maximo é 20 caractéres" },
  },
  tipo: {
    required: "O Tipo é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 10, message: "O maximo é 10 caractéres" },
  },
  observacoes: {
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 50, message: "O maximo é 50 caractéres" },
  },
};
export default vacinasValidators;
