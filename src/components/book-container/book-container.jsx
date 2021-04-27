import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import BookContainerItem from './book-container-item';
import styles from './book-container.module.scss';

const cx = classnames.bind(styles);

const BookContainer = (props) => {
  const { books } = props;

  return (
    <div className={cx('bookContainer')}>
      {books.length > 0
        ? books.map((book) => (
          <BookContainerItem key={book.id} book={book} />
        ))
        : (
          <div className={cx('bookContainer_notFoundMessage')}>
            No books available
          </div>
        )}
    </div>
  );
};

BookContainer.defaultProps = {
  books: [],
};

BookContainer.propTypes = {
  books: PropTypes.arrayOf(propTypes.book),
};

export default BookContainer;
