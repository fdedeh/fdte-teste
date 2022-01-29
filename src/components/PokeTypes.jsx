import React from "react";
import PokeType from "./PokeType";

const PokeTypes = ({ types }) => {
  return (
    <div className="poke-types">
      {types.map((data, index) => {
        return <PokeType type={data.type.name} key={index} />;
      })}
    </div>
  );
};

export default PokeTypes;
