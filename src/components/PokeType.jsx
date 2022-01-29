import React from "react";

const PokeType = ({ type }) => {
  return <div className={`poke-type type__${type}`}>{type}</div>;
};

export default PokeType;
