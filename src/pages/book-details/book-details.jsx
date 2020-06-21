import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { simulateHttpRequest } from '../../utils';
import bookDetailsMock from '../../mocks/book-details-mock';
import Layout from '../../components/layout';

import styles from './book-details.module.scss';

const cx = classnames.bind(styles);

const BookDetails = () => {
  const { bookId } = useParams();

  // TODO: select state from store via selector
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // TODO: dispatch 'BOOKS_GET_ONE_PENDING' action
    (async () => {
      setIsLoading(true);
      const payload = await simulateHttpRequest(bookDetailsMock);
      setBookDetails(payload);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    // TODO: dispatch get book details by book id
    // eslint-disable-next-line no-console
    console.log('book id:', bookId);
  }, [bookId]);

  return (
    <Layout>
      <div className={cx('bookDetails')}>
        <div className={cx('bookDetailsLinkContainer')}>
          <Link to="/books" className={cx('bookDetailsLinkContainer_back')}>
            &larr; Back to books
          </Link>
        </div>
        {!isLoading && Object.keys(bookDetails).length > 0 ? (
          <>
            <h1 className={cx('bookDetails_title')}>
              {bookDetails.title}
            </h1>
            <span className={cx('bookDetails_author')}>
              {`${bookDetails.author.firstName} ${bookDetails.author.lastName}`}
            </span>

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
