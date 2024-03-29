import React from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}
function Input({ name, type, placeholder, value }: inputProps) {
  return (
    <>
      <input
        className="w-full p-2 border-gray-200 rounded-md"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      ></input>
    </>
  );
}

export default Input;
