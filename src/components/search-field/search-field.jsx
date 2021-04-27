import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { inputTypes } from '../../constants';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import styles from './search-field.module.scss';

const cx = classnames.bind(styles);

const SearchField = (props) => {
  const {
    value,
    onChange,
    placeholder,
  } = props;

  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <div className={cx('searchField')}>
      <input
        value={value}
        onChange={handleChange}
        type={inputTypes.text.text}
        placeholder={placeholder}
        className={cx('searchField_input')}
      />
      <div className={cx('searchFieldIconContainer')}>
        <SearchIcon className={cx('searchFieldIconContainer_icon')} />
      </div>
    </div>
  );
};

SearchField.defaultProps = {
  placeholder: 'Search',
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchField;
