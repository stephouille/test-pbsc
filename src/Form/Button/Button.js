import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const propTypes = {
  disabled: PropTypes.bool.isRequired
};

const Button = ({ disabled }) =>
  <input className="Button" type="submit" value="Reset password" disabled={disabled} />;

Button.propTypes = propTypes;

export default Button;
