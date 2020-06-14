import React, { useState, useCallback } from 'react';
import classnames from 'classnames/bind';

import { inputTypes } from '../../constants';
import TextField from '../text-field';

import styles from './profile-form.module.scss';

const cx = classnames.bind(styles);

const LoginForm = () => {
  // TODO: handle toggle edit mode

  const [formData] = useState({
    email: { value: '', isValid: null, errorMessage: '' },
    firstName: { value: '', isValid: null, errorMessage: '' },
    lastName: { value: '', isValid: null, errorMessage: '' },
  });

  const handleChange = useCallback((name, value, event) => {
    event.preventDefault();
  }, []);

  return (
    <form className={cx('profileForm')}>
      <h1 className={cx('profileForm_title')}>Profile</h1>

      <div className={cx('profileFormInputContainer')}>
        <div className={cx('profileFormInputContainer_input', 'profileFormInputContainer_input__fullWidth')}>
          <TextField
            name="email"
            value={formData.email.value}
            onChange={handleChange}
            isValid={formData.email.isValid}
            errorMessage={formData.email.errorMessage}
            type={inputTypes.text.email}
            isDisabled
            placeholder="Email"
          />
        </div>
        <div className={cx('profileFormInputContainer_input')}>
          <TextField
            name="firstName"
            value={formData.firstName.value}
            onChange={handleChange}
            isValid={formData.firstName.isValid}
            errorMessage={formData.firstName.errorMessage}
            isDisabled
            placeholder="First name"
          />
        </div>
        <div className={cx('profileFormInputContainer_input')}>
          <TextField
            name="lastName"
            value={formData.lastName.value}
            onChange={handleChange}
            isValid={formData.lastName.isValid}
            errorMessage={formData.lastName.errorMessage}
            isDisabled
            placeholder="Last name"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
