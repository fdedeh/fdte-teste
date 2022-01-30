import React from "react";
import Button from "./Button";

const ReleaseButton = ({ removePokemon }) => {
  return (
    <div className="release-button">
      <Button
        text="LIBERAR POKEMON"
        onClick={() => {
          removePokemon();
        }}
      />
    </div>
  );
};

export default ReleaseButton;
