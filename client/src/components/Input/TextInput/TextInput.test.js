import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

test('renders TextInput component', () => {
  const label = 'Test Input';
  const id = 'testInput';
  const name = 'testInput';
  const type = 'text';
  const placeholder = 'Enter text';
  const maxLength = 50;

  render(
    <TextInput
      label={label}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText(label);
  expect(inputElement).toBeInTheDocument();

  expect(inputElement).toHaveAttribute('type', type);
  expect(inputElement).toHaveAttribute('name', name);
  expect(inputElement).toHaveAttribute('id', id);
  expect(inputElement).toHaveAttribute('placeholder', placeholder);
  expect(inputElement).toHaveAttribute('maxLength', maxLength.toString());

  const newValue = 'Cozy Cottage';
  userEvent.type(inputElement, newValue);

  expect(inputElement.value).toBe('Cozy Cottage');
});
