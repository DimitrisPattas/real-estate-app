import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectInput from './SelectInput';

test('renders SelectInput component', () => {
  const label = 'Test Select';
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const value = 'option2';
  const onChange = jest.fn();

  render(
    <SelectInput
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  );

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  const selectElement = screen.getByLabelText(label);
  expect(selectElement).toBeInTheDocument();

  options.forEach((option) => {
    const optionElement = screen.getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });

  const newValue = 'option3';
  userEvent.selectOptions(selectElement, newValue);

  expect(screen.getByText('Option 3')).toBeInTheDocument();
});
