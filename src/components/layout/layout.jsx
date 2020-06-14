import React from 'react';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const Layout = (props) => {
  const { children } = props;

  return (
    <div className={cx('layout')}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.children.isRequired,
};

export default Layout;
