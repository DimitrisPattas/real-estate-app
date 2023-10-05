import React, { useState } from 'react';
import axios from 'axios';

export default function SearchAutocomplete({ onSelectOption }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchOptions = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/ads?area=${value}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setOptions(response.data);
      if (response.data.length === 0) {
        setErrorMessage('No options found.');
      } else {
        setErrorMessage(null);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching options. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelectOption({});

    if (value.length >= 3) {
      fetchOptions(value);
    }
  };

  const handleOptionSelect = (option) => {
    onSelectOption(option);
    setSelectedOption(option.mainText);
    setOptions([]);
  };

  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="area"
      >
        Area <span className="text-red-500">*</span>
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="area"
        type="text"
        name="area"
        value={selectedOption}
        onChange={handleInputChange}
        placeholder="Type in the property's area"
        autoComplete="off"
      />
      {options.length > 0 && (
        <ul className="bg-white border border-gray-100 w-full mt-2">
          {options.map((option) => (
            <li
              key={option.placeId}
              onClick={() => handleOptionSelect(option)}
              className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
            >
              {option.mainText}
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </>
  );
}
