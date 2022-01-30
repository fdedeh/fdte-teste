import React from "react";
import { translateType } from "../utils/utils";

const PokeType = ({ type }) => {
  return <div className={`poke-type type__${type}`}>{translateType(type)}</div>;
};

export default PokeType;
