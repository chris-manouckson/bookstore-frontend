import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { usersGetOnePending } from '../../store/actions';
import { selectUsersOne, selectRequestStatus } from '../../store/selectors';
import Layout from '../../components/layout';
// import userDetailsMock from '../../mocks/user-details-mock';

import UserDetailsPersonal from './user-details-personal';
import styles from './user-details.module.scss';

const cx = classnames.bind(styles);

const UserDetails = () => {
  const { userId } = useParams();

  const dispatch = useDispatch();

  const userDetails = useSelector(selectUsersOne);

  const { isLoading: areDetailsLoading } = useSelector(selectRequestStatus('users', 'getOne'));

  useEffect(() => {
    dispatch(usersGetOnePending(userId));
  }, [dispatch, userId]);

  return (
    <Layout>
      <div className={cx('userDetails')}>
        <div className={cx('userDetailsLinkContainer')}>
          <Link to="/users" className={cx('userDetailsLinkContainer_back')}>
            &larr; Back to users
          </Link>
        </div>
        {!areDetailsLoading && userDetails ? (
          <UserDetailsPersonal
            firstName={userDetails.first_name}
            lastName={userDetails.last_name}
            email={userDetails.email}
            phone={userDetails.phone}
          />
        ) : (
          // TODO: replace with loader component
          'Please wait...'
        )}
      </div>
    </Layout>
  );
};

export default UserDetails;
