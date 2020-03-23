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
  const { input, meta, options, isMulti, placeholder, ...rest } = props;

  return (
    <>
      <Select
        {...input}
        {...rest}
        styles={selectStyles}
        inputValue=""
        isSearchable={false}
        name={input.name}
        options={options}
        getOptionValue={option => option["id"]}
        getOptionLabel={option => option["name"]}
        isMulti={isMulti}
        onChange={input.onChange}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <p style={{ color: "red", paddingBottom: "10px" }}>{meta.error}</p>
      )}
    </>
  );
};

export default SelectComponent;
