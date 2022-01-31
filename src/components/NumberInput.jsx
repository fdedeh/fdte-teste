import React from "react";
import chevron from "../assets/images/chevronDownBlack.png";

const NumberInput = ({
  className,
  label,
  placeholder,
  name,
  field,
  fieldState,
  suffix,
}) => {
  const increase = () => {
    field.value += 1;
  };
  const decrease = () => {
    field.value -= 1;
  };
  return (
    <div className={`${className} input__container`}>
      {label && <label className="input__label">{label}</label>}
      <div className="input__number">
        <input
          className="input"
          type="number"
          placeholder={placeholder}
          name={name}
          {...field}
        />
        {suffix && <p className="input__suffix">{suffix}</p>}
        <div className="input__btns">
          <img
            src={chevron}
            className="input__increase"
            alt="Mais"
            onClick={() => increase()}
          />
          <img
            src={chevron}
            className="input__decrease"
            alt="Menos"
            onClick={() => decrease()}
          />
        </div>
      </div>
      {fieldState?.error && (
        <span className="input__error">{fieldState.error.message}</span>
      )}
    </div>
  );
};

export default NumberInput;
