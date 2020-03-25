import React from "react";
import Select from "react-select";

const SelectComponent = props => {
  const { input, meta, options, isMulti, placeholder, ...rest } = props;

  return (
    <>
      <Select
        {...input}
        {...rest}
        className="react-select-form-container"
        classNamePrefix="react-select-form"
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
