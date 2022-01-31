import React from "react";

const PokeAvatar = ({ img, className }) => {
  return (
    <div
      className={`poke-avatar ${className}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    ></div>
  );
};

export default PokeAvatar;
