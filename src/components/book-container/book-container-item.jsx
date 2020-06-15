import React from 'react';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './book-container.module.scss';

const cx = classnames.bind(styles);

const BookContainerItem = (props) => {
  const { book } = props;

  return (
    <div className={cx('bookContainerItem')}>
      <p className={cx('bookContainerItem_author')}>
        {book.author ? `${book.author.firstName} ${book.author.lastName}` : 'Unknown'}
      </p>
      <h3 className={cx('bookContainerItem_title')}>
        {book.title}
      </h3>

      <p className={cx('bookContainerItem_description')}>
        {book.description || ''}
      </p>

      <span className={cx('bookContainerItem_price')}>
        {book.price ? `${book.price.currency} ${book.price.amount}` : ''}
      </span>
    </div>
  );
};

BookContainerItem.propTypes = {
  book: propTypes.book.isRequired,
};

export default BookContainerItem;
