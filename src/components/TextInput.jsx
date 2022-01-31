import React from "react";

const TextInput = ({
  className,
  label,
  placeholder,
  name,
  field,
  fieldState,
}) => {
  return (
    <div className={`${className} input__container`}>
      {label && <label className="input__label">{label}</label>}
      <input
        {...field}
        className="input"
        type="text"
        name={name}
        placeholder={placeholder}
      />
      {fieldState.error && (
        <span className="input__error">{fieldState.error.message}</span>
      )}
    </div>
  );
};

export default TextInput;
