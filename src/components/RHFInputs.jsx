import React from "react";
import { Controller } from "react-hook-form";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import Dropdown from "./Dropdown";

export const RHFTextInput = ({ control, name, label, field, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState }) => {
        return (
          <TextInput
            name={name}
            placeholder={props.placeholder}
            label={label}
            field={field}
            fieldState={fieldState}
          />
        );
      }}
      rules={props.rules}
    />
  );
};

export const RHFNumberInput = ({
  control,
  name,
  label,
  field,
  suffix,
  className,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState }) => {
        return (
          <NumberInput
            name={name}
            placeholder={props.placeholder}
            label={label}
            field={field}
            fieldState={fieldState}
            suffix={suffix}
            className={className}
          />
        );
      }}
      rules={props.rules}
    />
  );
};

export const RHFSelectInput = ({
  control,
  name,
  label,
  field,
  multiple,
  className,
  options,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState }) => {
        return (
          <Dropdown
            name={name}
            placeholder={props.placeholder}
            label={label}
            field={field}
            fieldState={fieldState}
            multiple={multiple}
            options={options}
            className={className}
          />
        );
      }}
      rules={props.rules}
    />
  );
};
