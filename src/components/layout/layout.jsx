import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { authGetCurrentUserPending } from '../../store/actions';
import { selectAuthCurrentUser } from '../../store/selectors';
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authGetCurrentUserPending());
  }, [dispatch]);

  const currentUser = useSelector(selectAuthCurrentUser);

  return (
    <div className={cx('layout')}>
      {isHeaderPresent && <LayoutHeader currentUser={currentUser} />}
      <main className={cx('layoutContent')}>
        {children}
      </main>
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
