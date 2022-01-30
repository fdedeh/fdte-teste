import React from "react";
import PokeAvatar from "./PokeAvatar";
import PokeStats from "./PokeStats";
import Separator from "./Separator";
import PokeTypes from "./PokeTypes";
import PokeAbilities from "./PokeAbilities";
import ReleaseButton from "./ReleaseButton";
import PokeFullStats from "./PokeFullStats";

const EditModal = ({ pokemon, removePokemon }) => {
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
        <PokeAbilities list={pokemon.abilities} />
        <Separator title="ESTATÍSTICAS" />
        <PokeFullStats list={pokemon.stats} />
        <ReleaseButton removePokemon={removePokemon} />
      </div>
    </div>
  );
};

export default EditModal;
