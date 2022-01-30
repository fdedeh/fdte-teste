import React from "react";

const PokeAbilities = ({ list, last = false }) => {
  return (
    <div className={`poke-abilities ${last ? "last" : null}`}>
      {list.map((item, index) => {
        return index === list.length - 1 ? (
          <span key={index}>{item.ability.name}</span>
        ) : (
          <span key={index}>{`${item.ability.name},`}</span>
        );
      })}
    </div>
  );
};

export default PokeAbilities;
