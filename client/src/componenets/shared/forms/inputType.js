import React from "react";

const InputType = ({
  labelFor,
  Labeltext,
  inputTYPE,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {Labeltext}
        </label>
        <input
          type={inputTYPE}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
