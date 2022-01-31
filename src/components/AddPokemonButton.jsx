import React from "react";
import Button from "./Button";
import plusIcon from "../assets/images/plus.png";
import { useSelector } from "react-redux";
import { MAX_POKEMONS } from "../utils/utils";

const AddPokemonButton = ({ showModal }) => {
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  return (
    <Button
      icon={<img src={plusIcon} alt="+" />}
      onClick={showModal}
      disabled={pokemons.length >= MAX_POKEMONS}
    />
  );
};

export default AddPokemonButton;
