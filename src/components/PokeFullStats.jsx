import React from "react";

const PokeFullStats = ({ list }) => {
  return (
    <div className="poke-fullStats">
      <div>
        <div className="def">Defesa</div>
        <div>{list[2].base_stat}</div>
      </div>
      <div>
        <div className="atk">Ataque</div>
        <div>{list[1].base_stat}</div>
      </div>
      <div>
        <div className="def">Defesa Especial</div>
        <div>{list[4].base_stat}</div>
      </div>
      <div>
        <div className="atk">Ataque Especial</div>
        <div>{list[3].base_stat}</div>
      </div>
      <div>
        <div className="spd">Velocidade</div>
        <div>{list[5].base_stat}</div>
      </div>
    </div>
  );
};

export default PokeFullStats;
