import React, { useState, useCallback } from 'react';
import classnames from 'classnames/bind';

import Layout from '../../components/layout';
import SearchField from '../../components/search-field';
import AuthorContainer from '../../components/author-container';
import authorsMock from '../../mocks/authors-mock';

import styles from './authors.module.scss';

const cx = classnames.bind(styles);

const Authors = () => {
  const [searchText, setSearchText] = useState('');
  // TODO: replace mock with data got from back-end API response
  const [authors] = useState(authorsMock);

  const handleChangeSearchField = useCallback((value) => {
    setSearchText(value);
    // TODO: handle dispatch get books action
  }, []);

  return (
    <Layout>
      <div className={cx('authors')}>
        <h1 className={cx('authors_title')}>Authors</h1>

        <div className={cx('authors_searchFieldContainer')}>
          <SearchField
            value={searchText}
            onChange={handleChangeSearchField}
          />
        </div>

        <AuthorContainer authors={authors} />
      </div>
    </Layout>
  );
};

export default Authors;
