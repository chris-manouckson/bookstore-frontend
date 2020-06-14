import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import classnames from 'classnames/bind';

import { inputTypes, errorMessages } from '../../constants';
import TextField from '../text-field';

import styles from './signup-form.module.scss';

const cx = classnames.bind(styles);

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: { value: '', isValid: null, errorMessage: '' },
    password: { value: '', isValid: null, errorMessage: '' },
    confirmPassword: { value: '', isValid: null, errorMessage: '' },
  });

  const formDataIsValid = useMemo(
    () => formData.email.isValid && formData.password.isValid && formData.confirmPassword.isValid,
    [formData],
  );

  const getIsValid = useCallback((name, value) => {
    switch (name) {
      // TODO: handle email and password validation
      case 'password':
      case 'confirmPassword':
      default:
        return value !== '';
    }
  }, []);

  const getErrorMessage = useCallback((name, value) => {
    // TODO: handle appropriate cases
    if (name === 'password' || name === 'confirmPassword') {
      return value === '' ? errorMessages.requestedFormat : '';
    }

    return '';
  }, []);

  const [confirmPasswordFieldIsChanged, setConfirmPasswordFieldIsChanged] = useState(false);

  const handleChange = useCallback((name, value) => {
    if (name === 'confirmPassword' && !confirmPasswordFieldIsChanged) {
      setConfirmPasswordFieldIsChanged(true);
    }

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: {
        ...currentFormData,
        value,
        isValid: getIsValid(name, value),
        errorMessage: getErrorMessage(name, value),
      },
    }));
  }, [
    confirmPasswordFieldIsChanged,
    getIsValid,
    getErrorMessage,
  ]);

  useEffect(() => {
    if (!confirmPasswordFieldIsChanged) return;

    const passwordsDoNotMatch = formData.password.value !== formData.confirmPassword.value;

    setFormData((currentFormData) => ({
      ...currentFormData,
      password: {
        ...currentFormData.password,
        isValid: !passwordsDoNotMatch,
        errorMessage: passwordsDoNotMatch ? errorMessages.passwordsDoNotMatch : '',
      },
      confirmPassword: {
        ...currentFormData.confirmPassword,
        isValid: !passwordsDoNotMatch,
        errorMessage: passwordsDoNotMatch ? errorMessages.passwordsDoNotMatch : '',
      },
    }));
  }, [
    confirmPasswordFieldIsChanged,
    formData.password.value,
    formData.confirmPassword.value,
  ]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    // TODO: dispatch login user action
    // eslint-disable-next-line no-console
    console.log(formData);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className={cx('signupForm')}>
      <h1 className={cx('signupForm_title')}>Sign up</h1>

      <div className={cx('signupForm_inputContainer')}>
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
        <TextField
          name="confirmPassword"
          value={formData.confirmPassword.value}
          onChange={handleChange}
          isValid={formData.confirmPassword.isValid}
          errorMessage={formData.confirmPassword.errorMessage}
          type={inputTypes.text.password}
          placeholder="Confirm password"
        />
      </div>

      <button
        disabled={!formDataIsValid}
        type="submit"
        className={cx('signupForm_submit')}
      >
        Create account
      </button>
    </form>
  );
};

export default SignupForm;
