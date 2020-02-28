import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

import Form from './Form';
import FormContainer from './FormContainer';
import Button from './Button';

const mockHandleChange = jest.fn();
const mockHandleSubmit = jest.fn();

const getFormComponent = (email = '') => (
  <Form
    handleChange={mockHandleChange}
    handleSubmit={mockHandleSubmit}
    email={email}
  />
);

test('should display a form with an input and a button', () => {
  // Given
  const wrapper = shallow(getFormComponent());

  const input = wrapper.find('.Input');
  const button = wrapper.find(Button);

  // Then
  expect(input).toHaveLength(1);
  expect(button).toHaveLength(1);
  expect(button.props().disabled).toBeTruthy();
});

test('should enable the button when a user enters an email', () => {
  // Given
  // When
  const wrapper = shallow(getFormComponent('test'));

  // Then
  const button = wrapper.find(Button);
  expect(button.props().disabled).toBeFalsy();
});

test('should show an error if the user clicks on the button and the email format is not valid', () => {
  // Given
  const wrapper = mount(<FormContainer email='testErrorMail' />);

  // When
  const form = wrapper.find('.Form');
  form.simulate('submit');

  // Then
  const errorMessage = wrapper.find('.Error');
  expect(errorMessage).toHaveLength(1);
});
