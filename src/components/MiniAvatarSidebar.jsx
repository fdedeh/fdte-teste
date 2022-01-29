import React from "react";

const MiniAvatarSidebar = ({ pokemon }) => {
  return (
    <div className="sidebar__item">
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
