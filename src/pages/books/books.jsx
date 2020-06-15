import React, { useState, useCallback } from 'react';
import classnames from 'classnames/bind';

import Layout from '../../components/layout';
import SearchField from '../../components/search-field';
import BookContainer from '../../components/book-container';
import booksMock from '../../mocks/books-mock';

import styles from './books.module.scss';

const cx = classnames.bind(styles);

const Books = () => {
  const [searchText, setSearchText] = useState('');
  // TODO: replace mock with data got from back-end API response
  const [books] = useState(booksMock);

  const handleChangeSearchField = useCallback((value) => {
    setSearchText(value);
    // TODO: handle dispatch get books action
  }, []);

  return (
    <Layout>
      <div className={cx('books')}>
        <h1 className={cx('books_title')}>Books</h1>

        <div className={cx('books_searchFieldContainer')}>
          <SearchField
            value={searchText}
            onChange={handleChangeSearchField}
          />
        </div>

        <BookContainer books={books} />
      </div>
    </Layout>
  );
};

export default Books;
