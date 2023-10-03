import React, { useState } from 'react';
import InputNumber from '../Input/InputNumber/InputNumber';
import SelectInput from '../Input/SelectInput/SelectInput';
import TextAreaInput from '../Input/TextAreaInput/TextAreaInput';
import TextInput from '../Input/TextInput/TextInput';
import SearchAutompleteCustom from '../Input/SearchAutocompleteCustom/SearchAutompleteCustom';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(155, 'Title must be at most 155 characters'),
  type: Yup.string().required('Type is required'),
  area: Yup.object().test(
    'has-properties',
    'You must choose an area',
    (obj) => {
      return Object.keys(obj).length > 0;
    }
  ),
  priceInEuros: Yup.string()
    .required('Price is required')
    .matches(/^\d+$/, 'Price must be a positive number'),
  level: Yup.string().required('Level is required'),
  bathrooms: Yup.string()
    .required('Bathrooms is required')
    .matches(/^\d+$/, 'Bathrooms must be a non-negative number'),
  extraDescription: Yup.string(),
});
export default function NewAd() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'RENT',
    area: {},
    priceInEuros: null,
    level: null,
    bathrooms: null,
    extraDescription: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('change', name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data is valid:', formData);
      await validationSchema.validate(formData, { abortEarly: false });
      setValidationErrors({});
      // Data is valid, submit to backend
      // console.log('Form data is valid:', formData);
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
    }
  };

  const handleSelectOption = (option) => {
    setFormData({
      ...formData,
      area: option,
    });
  };

  const typeOptions = [
    { label: 'Rent', value: 'RENT' },
    { label: 'Buy', value: 'BUY' },
    { label: 'Exchange', value: 'EXCHANGE' },
    { label: 'Donation', value: 'DONATION' },
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-xs md:max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <TextInput
              label="Title"
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Classified title up to 155 chars"
              maxLength="155"
              isRequired={true}
            />
            <span className="text-red-500">{validationErrors.title}</span>
          </div>
          <div className="mb-6">
            <SelectInput
              label="Type"
              options={typeOptions}
              value={formData.type}
              onChange={handleChange}
              isRequired={true}
            />
            <span className="text-red-500">{validationErrors.type}</span>
          </div>
          <div className="mb-6">
            <SearchAutompleteCustom onSelectOption={handleSelectOption} />
            <span className="text-red-500">{validationErrors.area}</span>
          </div>
          <div className="mb-6">
            <InputNumber
              title="Price in euros"
              placeholder="Amount"
              name="priceInEuros"
              isRequired={true}
              onChange={handleChange}
            />
            <span className="text-red-500">
              {validationErrors.priceInEuros}
            </span>
          </div>
          <div className="mb-6">
            <InputNumber
              title="Level"
              placeholder="e.g. -1, 0, 1, 2 ..."
              name="level"
              isRequired={true}
              min={-2}
              onChange={handleChange}
            />
            <span className="text-red-500">{validationErrors.level}</span>
          </div>
          <div className="mb-6">
            <InputNumber
              title="Bathrooms"
              placeholder="e.g. 0, 1, 2 ..."
              name="bathrooms"
              isRequired={true}
              onChange={handleChange}
            />
            <span className="text-red-500">{validationErrors.bathrooms}</span>
          </div>
          <div className="mb-6">
            <TextAreaInput
              label="Extra description"
              id="extra_description"
              name="extraDescription"
              value={formData.extraDescription}
              onChange={handleChange}
              placeholder="Type here"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
