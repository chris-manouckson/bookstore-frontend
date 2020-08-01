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
      <div className={cx('bookContainerItemCover')}>
        {/* TODO: place cover image */}
      </div>

      <div className={cx('bookContainerItemInfo')}>
        <section className={cx('bookContainerItemInfo_title')}>
          <Link to={`books/${book.id}`} className={cx('bookContainerItemInfo_link')}>
            {book.title}
          </Link>
        </section>

        <section className={cx('bookContainerItemInfo_author')}>
          {book.authors
            .map((author) => `${author.first_name} ${author.last_name}`)
            .join(', ')}
        </section>

        <section className={cx('bookContainerItemInfo_price')}>
          {book.price ? `${book.price.currency} ${book.price.amount}` : ''}
        </section>
      </div>
    </div>
  );
};

BookContainerItem.propTypes = {
  book: propTypes.book.isRequired,
};

export default BookContainerItem;
