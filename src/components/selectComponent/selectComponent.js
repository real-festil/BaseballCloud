import React from "react";
import Select from "react-select";

const selectStyles = {
  container: provided => ({
    ...provided,
    margin: 5,
    width: "100%"
  }),
  control: provided => ({
    ...provided,
    background: "#eff1f3",
    border: "none",
    height: 40
  }),
  valueContainer: provided => ({
    ...provided,
    height: "100%"
  }),
  indicatorSeparator: () => ({})
};

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
      styles={selectStyles}
      inputValue=""
      isSearchable={false}
      name={name}
      options={options}
      isMulti={props.isMulti}
      onChange={onChange}
      placeholder={props.placeholder}
    />
  );
};

export default SelectComponent;
