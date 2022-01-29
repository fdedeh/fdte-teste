import React from "react";

const PokeStats = ({ hp, height, weight }) => {
  return (
    <div className="poke-stats">
      <div>
        <span>HP</span>
        <span>{`${hp}/${hp}`}</span>
      </div>
      <div>
        <span>ALTURA</span>
        <span>{`${height / 10} m`}</span>
      </div>
      <div>
        <span>PESO</span>
        <span>{`${weight / 10}kg`}</span>
      </div>
    </div>
  );
};

export default PokeStats;
