import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './user-details.module.scss';

const cx = classnames.bind(styles);

const UserDetailsPersonal = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
  } = props;

  return (
    <div className={cx('userDetailsPersonal')}>
      <h1 className={cx('userDetails_fullName')}>{`${firstName} ${lastName}`}</h1>

      <address className={cx('userDetailsAddress')}>
        Email:&nbsp;
        <a href={`mailto:${email}`} className={cx('userDetailsAddress_email')}>
          {email}
        </a>
        <br />
        Phone:&nbsp;
        <a href={`tel:${phone}`} className={cx('userDetailsAddress_phone')}>
          {phone}
        </a>
        <br />
      </address>
    </div>
  );
};

UserDetailsPersonal.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default memo(UserDetailsPersonal);
