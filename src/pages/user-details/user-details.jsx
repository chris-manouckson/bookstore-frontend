import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { simulateHttpRequest } from '../../utils';
import userDetailsMock from '../../mocks/user-details-mock';
import Layout from '../../components/layout';

import styles from './user-details.module.scss';

const cx = classnames.bind(styles);

const UserDetails = () => {
  const { userId } = useParams();

  // TODO: select state from store via selector
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // TODO: dispatch 'USERS_GET_ONE_PENDING' action
    (async () => {
      setIsLoading(true);
      const payload = await simulateHttpRequest(userDetailsMock);
      setUserDetails(payload);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('user id:', userId);
  }, [userId]);

  return (
    <Layout>
      <div className={cx('userDetails')}>
        <div className={cx('userDetailsLinkContainer')}>
          <Link to="/users" className={cx('userDetailsLinkContainer_back')}>
            &larr; Back to users
          </Link>
        </div>
        {!isLoading && Object.keys(userDetails).length > 0 ? (
          <>
            <h1 className={cx('userDetails_fullName')}>
              {`${userDetails.firstName} ${userDetails.lastName}`}
            </h1>

            <address className={cx('userDetailsAddress')}>
              Email:
              {' '}
              <a
                href={`mailto:${userDetails.email}`}
                className={cx('userDetailsAddress_email')}
              >
                {userDetails.email}
              </a>
              <br />
              Phone:
              {' '}
              <a
                href={`tel:${userDetails.phone}`}
                className={cx('userDetailsAddress_phone')}
              >
                {userDetails.phone}
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

export default UserDetails;
