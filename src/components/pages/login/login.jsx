import React from 'react';
import classnames from 'classnames/bind';

import Layout from '../../layout';
import LoginForm from '../../login-form';

import styles from './login.module.scss';

const cx = classnames.bind(styles);

const Login = () => (
  <Layout>
    <div className={cx('login')}>
      <LoginForm />
    </div>
  </Layout>
);

export default Login;
