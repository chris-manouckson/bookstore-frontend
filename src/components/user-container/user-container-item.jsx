import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './user-container.module.scss';

const cx = classnames.bind(styles);

const UserContainerItem = (props) => {
  const { user } = props;

  return (
    <div className={cx('userContainerItem')}>
      <div className={cx('userContainerItemAvatar')}>
        {/* TODO: place avatar image */}
        <img alt="avatar" className={cx('userContainerItemAvatar_image')} />
      </div>

      <div className={cx('userContainerItemInfo')}>
        <section className={cx('userContainerItemInfo_fullName')}>
          <Link to={`users/${user.id}`} className={cx('userContainerItemInfo_link')}>
            {`${user.first_name} ${user.last_name}`}
          </Link>
        </section>

        <section className={cx('userContainerItemInfo_booksCount')}>
          {/* TODO: add books count */}
        </section>
      </div>
    </div>
  );
};

UserContainerItem.propTypes = {
  user: propTypes.user.isRequired,
};

export default UserContainerItem;
