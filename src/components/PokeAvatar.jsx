import React from "react";

const PokeAvatar = ({ img }) => {
  return (
    <div
      className="poke-avatar"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    ></div>
  );
};

export default PokeAvatar;
