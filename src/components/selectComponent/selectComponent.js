import React from "react";
import Select from "react-select";

const SelectComponent = props => {
  const {
    input: { name, onChange },
    meta,
    options,
    ...rest
  } = props;

  return (
    <Select
      {...rest}
      name={name}
      options={options}
      isMulti={props.isMulti}
      onChange={onChange}
      placeholder={props.placeholder}
    />
  );
};

export default SelectComponent;
