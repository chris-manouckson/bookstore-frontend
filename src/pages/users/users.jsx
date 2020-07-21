import React, { useState, useCallback } from 'react';
import classnames from 'classnames/bind';

import Layout from '../../components/layout';
import SearchField from '../../components/search-field';
import UserContainer from '../../components/user-container';
import usersMock from '../../mocks/users-mock';

import styles from './users.module.scss';

const cx = classnames.bind(styles);

const Users = () => {
  const [searchText, setSearchText] = useState('');
  // TODO: replace mock with data got from back-end API response
  const [users] = useState(usersMock);

  const handleChangeSearchField = useCallback((value) => {
    setSearchText(value);
    // TODO: handle dispatch get books action
  }, []);

  return (
    <Layout>
      <div className={cx('users')}>
        <h1 className={cx('users_title')}>Users</h1>

        <div className={cx('users_searchFieldContainer')}>
          <SearchField
            value={searchText}
            onChange={handleChangeSearchField}
          />
        </div>

        <UserContainer users={users} />
      </div>
    </Layout>
  );
};

export default Users;
