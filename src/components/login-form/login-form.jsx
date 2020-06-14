import React, { useState, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';

import { inputTypes, errorMessages } from '../../constants';
import TextField from '../text-field';

import styles from './login-form.module.scss';

const cx = classnames.bind(styles);

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: { value: '', isValid: null, errorMessage: '' },
    password: { value: '', isValid: null, errorMessage: '' },
  });

  const formDataIsValid = useMemo(
    () => formData.email.isValid && formData.password.isValid,
    [formData],
  );

  const getIsValid = useCallback((name, value) => {
    switch (name) {
      // TODO: handle cases for email and password
      default:
        return value !== '';
    }
  }, []);

  const getErrorMessage = useCallback((name, value) => {
    // TODO: handle appropriate cases
    if (value === '') {
      return errorMessages.fieldRequired;
    }
    return '';
  }, []);

  const handleChange = useCallback((name, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: {
        ...currentFormData,
        value,
        isValid: getIsValid(name, value),
        errorMessage: getErrorMessage(name, value),
      },
    }));
  }, [getIsValid, getErrorMessage]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    // TODO: dispatch login user action
    // eslint-disable-next-line no-console
    console.log(formData);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className={cx('loginForm')}>
      <h1 className={cx('loginForm_title')}>Log in</h1>

      <div className={cx('loginForm_inputContainer')}>
        <TextField
          name="email"
          value={formData.email.value}
          onChange={handleChange}
          isValid={formData.email.isValid}
          errorMessage={formData.email.errorMessage}
          type={inputTypes.text.email}
          placeholder="Email"
        />
        <TextField
          name="password"
          value={formData.password.value}
          onChange={handleChange}
          isValid={formData.password.isValid}
          errorMessage={formData.password.errorMessage}
          type={inputTypes.text.password}
          placeholder="Password"
        />
      </div>

      <button
        disabled={!formDataIsValid}
        type="submit"
        className={cx('loginForm_submit')}
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
