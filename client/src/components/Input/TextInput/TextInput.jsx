import React from 'react';

export default function TextInput({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
  isRequired,
}) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        maxLength={maxLength}
        autoComplete="off"
      />
    </>
  );
}
