import React from "react";
import chevron from "../assets/images/chevronDownBlack.png";

const Dropdown = ({ options, multiple, field, fieldState }) => {
  return (
    <div className="dropdown__container">
      <img src={chevron} className="dropdown__icon" alt="Chevron" />
      <select className="dropdown" multiple={!!multiple} {...field}>
        {options &&
          options.map((option, index) => (
            <option
              className="dropdown__option"
              value={option.value}
              key={index}
            >
              {option.text}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
