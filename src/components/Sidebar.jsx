import React, { useEffect, useState } from "react";
import Button from "./Button";
import plusIcon from "../assets/images/plus.png";
import MiniAvatarSidebar from "./MiniAvatarSidebar";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  return (
    <div className="sidebar">
      {pokemons.map((poke, index) => {
        return <MiniAvatarSidebar pokemon={poke} key={index} />;
      })}
      <Button icon={<img src={plusIcon} alt="+" />} />
    </div>
  );
};

export default Sidebar;
