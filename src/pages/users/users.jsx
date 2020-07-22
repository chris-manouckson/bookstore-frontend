import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import classnames from 'classnames/bind';

import { usersGetAllPending } from '../../store/actions';
import {
  selectUsersAll,
  selectUsersPagination,
  selectUsersSearch,
} from '../../store/selectors';
import Layout from '../../components/layout';
import SearchField from '../../components/search-field';
import UserContainer from '../../components/user-container';
import Pagination from '../../components/pagination';
// import usersMock from '../../mocks/users-mock';

import styles from './users.module.scss';

const cx = classnames.bind(styles);

const Users = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const users = useSelector(selectUsersAll);
  const usersPagination = useSelector(selectUsersPagination);
  const usersSearch = useSelector(selectUsersSearch);

  const handleChangePage = useCallback((page) => {
    const currentQuery = queryString.parse(location.search);
    history.replace(`/users?${queryString.stringify({
      ...currentQuery,
      page: page + 1,
    })}`);
  }, [location, history]);

  const [search, setSearch] = useState(usersSearch.text);

  const handleChangeSearchField = useCallback((value) => {
    setSearch(value);
  }, []);

  useEffect(() => {
    const currentQuery = queryString.parse(location.search);

    if (!currentQuery.page) {
      history.replace(`/users?${queryString.stringify({ ...currentQuery, page: 1 })}`);
    }
  }, [location.search, history]);

  useEffect(() => {
    const { page, order } = queryString.parse(location.search);

    if (!page) {
      return;
    }

    const nextOffset = (page - 1) * usersPagination.limit;
    const nextLimit = usersPagination.limit;
    const nextOrder = order;
    const nextSearch = search;

    dispatch(usersGetAllPending(nextOffset, nextLimit, nextOrder, nextSearch));
  }, [
    location.search,
    usersPagination.limit,
    search,
    dispatch,
  ]);

  return (
    <Layout>
      <div className={cx('users')}>
        <h1 className={cx('users_title')}>Users</h1>

        <div className={cx('users_searchFieldContainer')}>
          <SearchField
            value={search}
            onChange={handleChangeSearchField}
          />
        </div>

        {usersPagination.total > users.length && (
          <Pagination
            onChangePage={handleChangePage}
            offset={usersPagination.offset}
            limit={usersPagination.limit}
            total={usersPagination.total}
          />
        )}

        <UserContainer users={users} />

        {usersPagination.total > users.length && (
          <Pagination
            onChangePage={handleChangePage}
            offset={usersPagination.offset}
            limit={usersPagination.limit}
            total={usersPagination.total}
          />
        )}
      </div>
    </Layout>
  );
};

export default Users;
