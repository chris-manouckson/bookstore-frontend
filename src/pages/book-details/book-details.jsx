import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { booksGetOnePending } from '../../store/actions';
import {
  selectRequestStatus,
  selectBooksOne,
} from '../../store/selectors';
// import bookDetailsMock from '../../mocks/book-details-mock';
import Layout from '../../components/layout';

import styles from './book-details.module.scss';

const cx = classnames.bind(styles);

const BookDetails = () => {
  const { bookId } = useParams();

  const dispatch = useDispatch();

  const { isLoading } = useSelector(selectRequestStatus('books', 'getOne'));

  const bookDetails = useSelector(selectBooksOne);

  useEffect(() => {
    dispatch(booksGetOnePending(bookId));
  }, [dispatch, bookId]);

  return (
    <Layout>
      <div className={cx('bookDetails')}>
        <div className={cx('bookDetailsLinkContainer')}>
          <Link to="/books" className={cx('bookDetailsLinkContainer_back')}>
            &larr; Back to books
          </Link>
        </div>
        {!isLoading && bookDetails ? (
          <>
            <h1 className={cx('bookDetails_title')}>
              {bookDetails.title}
            </h1>
            <div className={cx('bookDetailsAuthors')}>
              {bookDetails.authors
                .map((author, authorIndex) => (
                  // TODO: replace with link to corresponding author page
                  <span key={author.id} className={cx('bookDetailsAuthors_author')}>
                    {`${author.first_name} ${author.last_name}${
                      authorIndex !== bookDetails.authors.length - 1 ? ', ' : ''
                    }`}
                  </span>
                ))}
            </div>

            <div className={cx('bookDetails_description')}>
              <section className={cx('bookDetails_price')}>
                {bookDetails.price ? `Price: ${bookDetails.price.currency} ${bookDetails.price.amount}` : ''}
              </section>
              {bookDetails.description || ''}
            </div>
          </>
        ) : (
          // TODO: replace with loader component
          'Please wait'
        )}
      </div>
    </Layout>
  );
};

export default BookDetails;
