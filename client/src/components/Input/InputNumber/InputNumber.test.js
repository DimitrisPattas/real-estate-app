import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputNumber from './InputNumber';

test('renders InputNumber component', () => {
  render(<InputNumber title="Test Input" name="testInput" />);

  const labelElement = screen.getByText(/Test Input/);
  expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText(/Test Input/);
  expect(inputElement).toBeInTheDocument();
});

test('handles onChange event', () => {
  render(<InputNumber title="Test Input" name="testInput" />);

  const inputElement = screen.getByLabelText(/Test Input/);
  const newValue = '200';
  userEvent.type(inputElement, newValue);

  expect(inputElement.value).toBe('200');
});

test('handles onChange event with non-numeric value', () => {
  render(<InputNumber title="Test Input" name="testInput" />);

  const inputElement = screen.getByLabelText(/Test Input/);
  const nonNumericValue = 'abc';
  userEvent.type(inputElement, nonNumericValue);

  expect(inputElement.value).toBe('');
});
