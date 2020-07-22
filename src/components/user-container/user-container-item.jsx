import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';
import avatarDefaultImage from '../../assets/images/avatar-default.svg';

import styles from './user-container.module.scss';

const cx = classnames.bind(styles);

const UserContainerItem = (props) => {
  const { user } = props;

  return (
    <div className={cx('userContainerItem')}>
      <section className={cx('userContainerItemAvatar')}>
        <img
          src={user.avatar || avatarDefaultImage}
          alt="avatar default"
          className={cx('userContainerItemAvatar_image')}
        />
      </section>
      <section className={cx('userContainerItemDetails')}>
        <h3 className={cx('userContainerItem_fullName')}>
          <Link to={`user/${user.id}`} className={cx('userContainerItem_link')}>
            {`${user.first_name} ${user.last_name}`}
          </Link>
        </h3>
      </section>
    </div>
  );
};

UserContainerItem.propTypes = {
  user: propTypes.user.isRequired,
};

export default UserContainerItem;
