import React from 'react';
import classnames from 'classnames/bind';

import Layout from '../../layout';
import ProfileForm from '../../profile-form';

import styles from './profile.module.scss';

const cx = classnames.bind(styles);

const Profile = () => (
  <Layout>
    <div className={cx('profile')}>
      <ProfileForm />
    </div>
  </Layout>
);

export default Profile;
