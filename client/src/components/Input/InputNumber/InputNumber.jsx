import React from 'react';

export default function InputNumber({
  title,
  name,
  isRequired,
  placeholder,
  min,
  onChange,
}) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={title.toLowerCase()}
      >
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id={title.toLowerCase()}
        type="number"
        name={name}
        min={min || 0}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
    </>
  );
}
