import React from "react";
import PokeStats from "./PokeStats";
import PokeAvatar from "./PokeAvatar";
import Separator from "./Separator";
import PokeTypes from "./PokeTypes";
import Abilities from "./Abilities";
import PokeBall from "./PokeBall";

const CatchModal = ({ pokemon, catchPokemon }) => {
  return (
    <div className="catchModal">
      <div className="catchModal__main">
        <PokeAvatar img={pokemon.sprites.front_default} />
        <div className="catchModal__name">{pokemon.name}</div>
        <PokeStats
          hp={pokemon.stats[0].base_stat}
          height={pokemon.height}
          weight={pokemon.weight}
        />
        <Separator title="TIPO" />
        <PokeTypes types={pokemon.types} />
        <Separator title="HABILIDADES" />
        <Abilities list={pokemon.abilities} />
        <PokeBall capture={catchPokemon} />
      </div>
    </div>
  );
};

export default CatchModal;
