import React from "react";
const Input = ({ onChange, className, label, ...rest }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
      <input onChange={onChange} className={className} id={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;
