import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import UserContainerItem from './user-container-item';
import styles from './user-container.module.scss';

const cx = classnames.bind(styles);

const UserContainer = (props) => {
  const { users } = props;

  return (
    <div className={cx('userContainer')}>
      {users.length > 0
        ? users.map((user) => (
          <UserContainerItem key={user.id} user={user} />
        ))
        : (
          <div className={cx('userContainer_notFoundMessage')}>
            No users available
          </div>
        )}
    </div>
  );
};

UserContainer.defaultProps = {
  users: [],
};

UserContainer.propTypes = {
  users: PropTypes.arrayOf(propTypes.user),
};

export default UserContainer;
