import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { inputTypes } from '../../constants';

import styles from './text-field.module.scss';

const cx = classnames.bind(styles);

const TextField = (props) => {
  const {
    name,
    value,
    onChange,
    isValid,
    type,
    placeholder,
    errorMessage,
    isDisabled,
  } = props;

  const handleChange = useCallback((event) => {
    onChange(event.target.name, event.target.value, event);
  }, [onChange]);

  return (
    <div className={cx('textField')}>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        className={cx('textField_input', {
          textField_input__invalid: isValid === false,
        })}
      />
      <div
        className={cx('textField_errorMessage', {
          textField_errorMessage__hidden: isValid,
        })}
      >
        {errorMessage}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  isValid: null,
  type: inputTypes.text.text,
  placeholder: '',
  errorMessage: '',
  isDisabled: false,
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
  type: PropTypes.oneOf(Object.values(inputTypes.text)),
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default TextField;
