export const translateType = (type) => {
  switch (type) {
    case "bug":
      return "inseto";
    case "dark":
      return "noturno";
    case "dragon":
      return "dragão";
    case "electric":
      return "elétrico";
    case "fairy":
      return "fada";
    case "fire":
      return "fogo";
    case "fighting":
      return "lutador";
    case "flying":
      return "voador";
    case "grass":
      return "planta";
    case "ghost":
      return "fantasma";
    case "ground":
      return "terra";
    case "ice":
      return "gelo";
    case "poison":
      return "veneno";
    case "psychic":
      return "psíquico";
    case "rock":
      return "pedra";
    case "steel":
      return "aço";
    case "water":
      return "água";
    default:
      return type;
  }
};

export const TYPES_SELECT = [
  { value: "bug", text: "inseto" },
  { value: "dark", text: "noturno" },
  { value: "dragon", text: "dragão" },
  { value: "electric", text: "elétrico" },
  { value: "fairy", text: "fada" },
  { value: "fire", text: "fogo" },
  { value: "fighting", text: "lutador" },
  { value: "flying", text: "voador" },
  { value: "grass", text: "planta" },
  { value: "ghost", text: "fantasma" },
  { value: "ground", text: "terra" },
  { value: "ice", text: "gelo" },
  { value: "normal", text: "normal" },
  { value: "poison", text: "veneno" },
  { value: "psychic", text: "psíquico" },
  { value: "rock", text: "pedra" },
  { value: "steel", text: "aço" },
  { value: "water", text: "água" },
];

export const MAX_POKEMONS = 6;
export const REQUIRED_MSG = "Este campo é obrigatório!";

export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
