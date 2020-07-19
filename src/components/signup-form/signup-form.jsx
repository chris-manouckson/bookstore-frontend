import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames/bind';

import { selectRequestStatus } from '../../store/selectors';
import { authSignupPending } from '../../store/actions';
import { inputTypes, errorMessages } from '../../constants';
import TextField from '../text-field';

import styles from './signup-form.module.scss';

const cx = classnames.bind(styles);

const SignupForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isLoading, error } = useSelector(selectRequestStatus('auth', 'signup'));

  const [formData, setFormData] = useState({
    first_name: { value: '', isValid: null, errorMessage: '' },
    last_name: { value: '', isValid: null, errorMessage: '' },
    email: { value: '', isValid: null, errorMessage: '' },
    phone: { value: '', isValid: null, errorMessage: '' },
    password: { value: '', isValid: null, errorMessage: '' },
    confirmPassword: { value: '', isValid: null, errorMessage: '' },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
        isValid: getIsValid('password', formData.password.value) && !passwordsDoNotMatch,
        errorMessage: passwordsDoNotMatch ? errorMessages.passwordsDoNotMatch : '',
      },
      confirmPassword: {
        ...currentFormData.confirmPassword,
        isValid: getIsValid('confirmPassword', formData.confirmPassword.value) && !passwordsDoNotMatch,
        errorMessage: passwordsDoNotMatch ? errorMessages.passwordsDoNotMatch : '',
      },
    }));
  }, [
    confirmPasswordFieldIsChanged,
    getIsValid,
    formData.password.value,
    formData.confirmPassword.value,
  ]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const requestData = Object.keys(formData).reduce((currentRequestData, fieldName) => ({
      ...currentRequestData,
      [fieldName]: formData[fieldName].value,
    }), {});

    dispatch(authSignupPending(requestData));

    setIsSubmitted(true);
  }, [formData, dispatch]);

  useEffect(() => {
    if (!isSubmitted) return;

    if (!isLoading && !error) {
      history.push('/profile');
    }
  }, [isSubmitted, isLoading, error, history]);

  return (
    <form onSubmit={handleSubmit} className={cx('signupForm')}>
      <h1 className={cx('signupForm_title')}>Sign up</h1>

      <div className={cx('signupForm_inputContainer')}>
        <TextField
          name="first_name"
          value={formData.first_name.value}
          onChange={handleChange}
          isValid={formData.first_name.isValid}
          errorMessage={formData.first_name.errorMessage}
          placeholder="First name"
        />
        <TextField
          name="last_name"
          value={formData.last_name.value}
          onChange={handleChange}
          isValid={formData.last_name.isValid}
          errorMessage={formData.last_name.errorMessage}
          placeholder="Last name"
        />
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
          name="phone"
          value={formData.phone.value}
          onChange={handleChange}
          isValid={formData.phone.isValid}
          errorMessage={formData.phone.errorMessage}
          type={inputTypes.text.phone}
          placeholder="Phone number"
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
        {isLoading ? 'Please wait...' : 'Create account'}
      </button>
    </form>
  );
};

export default SignupForm;
