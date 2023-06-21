const vacinasValidators = {
  nome: {
    required: "O Nome é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 50, message: "O maximo é 50 caractéres" },
    pattern: { velue: /^[aA-zZ\s]+$/, message: "Somente Letras" },
  },
  tipo: {
    required: "Tipo é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 50, message: "O maximo é 50 caractéres" },
  },
  observacoes: {
    minLength: { value: 5, message: "O minímo é 3 caractéres" },
    maxLength: { value: 255, message: "O maximo é 255 caractéres" },
  },
};
export default vacinasValidators;
