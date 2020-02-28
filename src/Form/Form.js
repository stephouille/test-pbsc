import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

import Button from './Button';
import Spinner from './Spinner';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string,
  isLoading: PropTypes.bool,
  errorType: PropTypes.string,
  successMessage: PropTypes.string
};

const Form = ({
  handleChange,
  handleSubmit,
  email,
  isLoading,
  errorType,
  successMessage
}) => (
  <div className="Form__Wrapper">
    {successMessage ? (
      <div className="SuccessMessage">
        {successMessage}
      </div>
    ) : (
      <form className="Form" onSubmit={handleSubmit}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <label className="Label">Email address:</label>
            <div className="Inputs">
              <input className="Input" type="text" value={email} onChange={handleChange} required />
              {errorType && <div className="Error">{errorType}</div>}
              <Button disabled={email === ''} />
            </div>
          </Fragment>
        )}
      </form>
    )}
  </div>
);

Form.propTypes = propTypes;

export default Form;
