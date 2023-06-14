const animaisValidators = {
  nome: {
    required: "O Nome é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 50, message: "O maximo é 50 caractéres" },
  },
  tipo: { required: "O Tipo é Obrigatório" },
};
export default animaisValidators;
