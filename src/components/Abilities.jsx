import React from "react";

const Abilities = ({ list }) => {
  return (
    <div className="abilities">
      {list.map((item, index) => {
        return index === list.length - 1 ? (
          <span>{item.ability.name}</span>
        ) : (
          <span>{`${item.ability.name},`}</span>
        );
      })}
    </div>
  );
};

export default Abilities;
