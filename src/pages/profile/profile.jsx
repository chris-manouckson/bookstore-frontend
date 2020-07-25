import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames/bind';

import { selectAuthCurrentUser, selectRequestStatus } from '../../store/selectors';
import Layout from '../../components/layout';
import ProfileForm from '../../components/profile-form';

import styles from './profile.module.scss';

const cx = classnames.bind(styles);

const Profile = () => {
  const currentUser = useSelector(selectAuthCurrentUser);

  const { isLoading: isCurrentUserLoading } = useSelector(selectRequestStatus('auth', 'getCurrentUser'));

  if (!localStorage.getItem('accessToken')) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <div className={cx('profile')}>
        {!isCurrentUserLoading && currentUser ? (
          <ProfileForm
            firstName={currentUser.first_name}
            lastName={currentUser.last_name}
            email={currentUser.email}
            phone={currentUser.phone}
          />
        ) : (
          // TODO: replace with loading component
          'Please wait..'
        )}
      </div>
    </Layout>
  );
};

export default Profile;
