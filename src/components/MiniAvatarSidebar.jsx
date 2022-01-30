import React from "react";

const MiniAvatarSidebar = ({ pokemon, showModal }) => {
  return (
    <div className="sidebar__item" onClick={() => showModal(pokemon)}>
      <div
        className="sidebar__avatar"
        style={{
          backgroundImage: `url("${pokemon.sprites.front_default}")`,
        }}
      ></div>
    </div>
  );
};

export default MiniAvatarSidebar;
