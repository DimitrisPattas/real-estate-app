import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Loader from '../Loader/Loader';
import SearchAutomplete from '../Input/SearchAutocomplete/SearchAutomplete';
import InputNumber from '../Input/InputNumber/InputNumber';
import SelectInput from '../Input/SelectInput/SelectInput';
import TextAreaInput from '../Input/TextAreaInput/TextAreaInput';
import TextInput from '../Input/TextInput/TextInput';

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValid = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setValidationErrors({});
      return true;
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
      return false;
    }
  };

  const sendPostRequest = async () => {
    try {
      const body = {
        title: formData.title,
        type: formData.type,
        area: formData.area.mainText,
        placeId: formData.area.placeId,
        price: formData.priceInEuros,
        level: formData.level,
        bathrooms: formData.bathrooms,
        description: formData.extraDescription,
      };

      await axios.post('http://localhost:8080/api/ads/new', body);
      navigate('/');
    } catch (error) {
      console.error('Error sending post request:', error);
      alert('Something went wrong with the request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = await isValid();

    if (isValidForm) {
      setIsLoading(true);
      await sendPostRequest();
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-sm md:max-w-xl">
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
                <SearchAutomplete onSelectOption={handleSelectOption} />
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
                <span className="text-red-500">
                  {validationErrors.bathrooms}
                </span>
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
      )}
    </>
  );
}
