import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { simulateHttpRequest } from '../../utils';
import authorDetailsMock from '../../mocks/author-details-mock';
import Layout from '../../components/layout';

import styles from './author-details.module.scss';

const cx = classnames.bind(styles);

const AuthorDetails = () => {
  const { authorId } = useParams();

  // TODO: select state from store via selector
  const [authorDetails, setAuthorDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // TODO: dispatch 'AUTHORS_GET_ONE_PENDING' action
    (async () => {
      setIsLoading(true);
      const payload = await simulateHttpRequest(authorDetailsMock);
      setAuthorDetails(payload);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('author id:', authorId);
  }, [authorId]);

  return (
    <Layout>
      <div className={cx('authorDetails')}>
        <div className={cx('authorDetailsLinkContainer')}>
          <Link to="/authors" className={cx('authorDetailsLinkContainer_back')}>
            &larr; Back to authors
          </Link>
        </div>
        {!isLoading && Object.keys(authorDetails).length > 0 ? (
          <>
            <h1 className={cx('authorDetails_fullName')}>
              {`${authorDetails.firstName} ${authorDetails.lastName}`}
            </h1>

            <address className={cx('authorDetailsAddress')}>
              Email:
              {' '}
              <a
                href={`mailto:${authorDetails.email}`}
                className={cx('authorDetailsAddress_email')}
              >
                {authorDetails.email}
              </a>
              <br />
              Phone:
              {' '}
              <a
                href={`tel:${authorDetails.phone}`}
                className={cx('authorDetailsAddress_phone')}
              >
                {authorDetails.phone}
              </a>
              <br />
            </address>
          </>
        ) : (
          // TODO: replace with loader component
          'Please wait'
        )}
      </div>
    </Layout>
  );
};

export default AuthorDetails;
