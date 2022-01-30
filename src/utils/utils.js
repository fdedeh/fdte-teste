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
