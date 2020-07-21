import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './book-container.module.scss';

const cx = classnames.bind(styles);

const BookContainerItem = (props) => {
  const { book } = props;

  return (
    <div className={cx('bookContainerItem')}>
      <p className={cx('bookContainerItem_author')}>
        {book.authors
          .map((author) => `${author.first_name} ${author.last_name}`)
          .join(', ')}
      </p>
      <h3 className={cx('bookContainerItem_title')}>
        <Link to={`books/${book.id}`} className={cx('bookContainerItem_link')}>
          {book.title}
        </Link>
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
