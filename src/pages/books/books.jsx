import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import classnames from 'classnames/bind';

import { booksGetAllPending } from '../../store/actions';
import {
  selectBooksAll,
  selectBooksPagination,
  selectBooksSearch,
} from '../../store/selectors';
import Layout from '../../components/layout';
import SearchField from '../../components/search-field';
import BookContainer from '../../components/book-container';
import Pagination from '../../components/pagination';
// import booksMock from '../../mocks/books-mock';

import styles from './books.module.scss';

const cx = classnames.bind(styles);

const Books = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const books = useSelector(selectBooksAll);
  const booksPagination = useSelector(selectBooksPagination);
  const booksSearch = useSelector(selectBooksSearch);

  const handleChangePage = useCallback((page) => {
    const currentQuery = queryString.parse(location.search);
    history.replace(`/books?${queryString.stringify({
      ...currentQuery,
      page: page + 1,
    })}`);
  }, [location, history]);

  const [search, setSearch] = useState(booksSearch.text);

  const handleChangeSearchField = useCallback((value) => {
    setSearch(value);
  }, []);

  useEffect(() => {
    const currentQuery = queryString.parse(location.search);

    if (!currentQuery.page) {
      history.replace(`/books?${queryString.stringify({ ...currentQuery, page: 1 })}`);
    }
  }, [location.search, history]);

  useEffect(() => {
    const { page, order } = queryString.parse(location.search);

    if (!page) {
      return;
    }

    const nextOffset = (page - 1) * booksPagination.limit;
    const nextLimit = booksPagination.limit;
    const nextOrder = order;
    const nextSearch = search;

    dispatch(booksGetAllPending(nextOffset, nextLimit, nextOrder, nextSearch));
  }, [
    location.search,
    booksPagination.limit,
    search,
    dispatch,
  ]);

  return (
    <Layout>
      <div className={cx('books')}>
        <h1 className={cx('books_title')}>Books</h1>

        <div className={cx('books_searchFieldContainer')}>
          <SearchField
            value={search}
            onChange={handleChangeSearchField}
          />
        </div>

        {booksPagination.total > books.length && (
          <Pagination
            onChangePage={handleChangePage}
            offset={booksPagination.offset}
            limit={booksPagination.limit}
            total={booksPagination.total}
          />
        )}

        <BookContainer books={books} />

        {booksPagination.total > books.length && (
          <Pagination
            onChangePage={handleChangePage}
            offset={booksPagination.offset}
            limit={booksPagination.limit}
            total={booksPagination.total}
          />
        )}
      </div>
    </Layout>
  );
};

export default Books;
