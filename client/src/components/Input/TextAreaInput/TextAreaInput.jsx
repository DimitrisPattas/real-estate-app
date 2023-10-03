import React from 'react';

const TextAreaInput = ({ label, id, name, value, onChange, placeholder }) => {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows="4"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
    </>
  );
};

export default TextAreaInput;
