const animaisValidators = {
  nome: {
    required: "O Nome é Obrigatório",
    minLength: { value: 3, message: "O minímo é 3 caractéres" },
    maxLength: { value: 50, message: "O maximo é 50 caractéres" },
  },
  tipo: { required: "O Tipo é Obrigatório" },
  raca: {
    required: "A Raça é Obrigatória",
    maxLength: { value: 20, message: "Máximo de 20 caracteres" },
    minLength: { value: 3, message: "Máximo de 3 caracteres" },
  },
  dono: { required: "O Dono é Obrigatório" },
  peso: { required: "O peso é Obrigatório" },
  altura: { required: "A altura é Obrigatória" },
  dataN: {
    required: "Data é Obrigatória",
  },
  foto: {
    required: "Foto é Obrigatória",
    minLength: { value: 5, message: "Mínimo de 5 caracteres" },
  },
};
export default animaisValidators;
