import React from "react";
import pokeball from "../assets/images/pokeball.png";

const PokeBall = ({ capture }) => {
  return <img className="pokeball" src={pokeball} onClick={capture} />;
};

export default PokeBall;
