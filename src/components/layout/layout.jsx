import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import LayoutHeader from './layout-header';
import LayoutFooter from './layout-footer';
import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const Layout = (props) => {
  const {
    children,
    isHeaderPresent,
    isFooterPresent,
  } = props;

  return (
    <div className={cx('layout')}>
      {isHeaderPresent && <LayoutHeader />}
      {children}
      {isFooterPresent && <LayoutFooter />}
    </div>
  );
};

Layout.defaultProps = {
  isHeaderPresent: true,
  isFooterPresent: true,
};

Layout.propTypes = {
  children: propTypes.children.isRequired,
  isHeaderPresent: PropTypes.bool,
  isFooterPresent: PropTypes.bool,
};

export default Layout;
