import React from 'react';
import classnames from 'classnames/bind';

import Layout from '../../components/layout';
import SignupForm from '../../components/signup-form';

import styles from './signup.module.scss';

const cx = classnames.bind(styles);

const Signup = () => (
  <Layout>
    <div className={cx('signup')}>
      <SignupForm />
    </div>
  </Layout>
);

export default Signup;
