import React from 'react';

export default function SelectInput({
  label,
  options,
  value,
  onChange,
  isRequired,
}) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label.toLowerCase()}
      >
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className="block w-full py-2 px-3 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
