import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextAreaInput from './TextAreaInput';

test('renders TextAreaInput component', () => {
  const label = 'Test Text Area';
  const id = 'testTextArea';
  const name = 'testTextArea';
  const placeholder = 'Enter text';

  render(
    <TextAreaInput
      label={label}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  const textareaElement = screen.getByLabelText(label);
  expect(textareaElement).toBeInTheDocument();

  expect(textareaElement).toHaveAttribute('name', name);
  expect(textareaElement).toHaveAttribute('id', id);
  expect(textareaElement).toHaveAttribute('placeholder', placeholder);

  const newValue = 'Perfect for nature lovers.';
  userEvent.type(textareaElement, newValue);

  expect(textareaElement.value).toBe('Perfect for nature lovers.');
});
