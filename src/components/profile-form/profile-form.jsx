import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { inputTypes } from '../../constants';
import TextField from '../text-field';

import styles from './profile-form.module.scss';

const cx = classnames.bind(styles);

const ProfileForm = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
  } = props;

  const [formData, setFormData] = useState({
    firstName: { value: '', isValid: null, errorMessage: '' },
    lastName: { value: '', isValid: null, errorMessage: '' },
    email: { value: '', isValid: null, errorMessage: '' },
    phone: { value: '', isValid: null, errorMessage: '' },
  });

  useEffect(() => {
    setFormData({
      firstName: { value: firstName, isValid: null, errorMessage: '' },
      lastName: { value: lastName, isValid: null, errorMessage: '' },
      email: { value: email, isValid: null, errorMessage: '' },
      phone: { value: phone, isValid: null, errorMessage: '' },
    });
  }, [firstName, lastName, email, phone]);

  const handleChange = useCallback((name, value, event) => {
    event.preventDefault();
  }, []);

  return (
    <form className={cx('profileForm')}>
      <h1 className={cx('profileForm_title')}>Profile</h1>

      <div className={cx('profileFormAvatar')}>
        {/* TODO: place avatar */}
      </div>

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
        <div className={cx('profileFormInputContainer_input', 'profileFormInputContainer_input__fullWidth')}>
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
        <div className={cx('profileFormInputContainer_input', 'profileFormInputContainer_input__fullWidth')}>
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

ProfileForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ProfileForm;
