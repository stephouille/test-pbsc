import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';

class FormContainer extends Component {
  state = { isLoading: false, email: '', errorType: '' };

  handleChange = event => {
    this.setState({ email: event.target.value, errorType: '' });
  }

  emailIsValid = email =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  handleSubmit = event => {
    const { email } = this.state;

    if (this.emailIsValid(email)) {
      this.setState({ isLoading: true });

      axios.post(
        '//myneighby.herokuapp.com/api/v2/forgot-password',
        { loginId: email },
        { headers: { 'Content-Type': 'application/json' } }
      ).then(response => {
        this.setState({
          isLoading: false,
          successMessage: response.data.message 
        });
      }).catch(error => {
        this.setState({
          isLoading: false,
          errorType: error.response.data.error.message
        });
      });

    } else {
      this.setState({ errorType: 'WRONG EMAIL FORMAT'});
    }

    event.preventDefault();
  };

  render() {
    const { email, isLoading, errorType, successMessage } = this.state;

    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={email}
        isLoading={isLoading}
        errorType={errorType}
        successMessage={successMessage}
      />
    );
  }
}

export default FormContainer;
