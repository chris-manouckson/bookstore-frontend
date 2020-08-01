import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const links = [
  { to: '/books', label: 'Books' },
  { to: '/users', label: 'Users' },
  { to: '/login', label: 'Log in', isAuthRequired: false },
  { to: '/signup', label: 'Sign up', isAuthRequired: false },
  { to: '/profile', label: 'Profile', isAuthRequired: true },
  {
    to: '/logout', label: 'Log out', isDanger: true, isAuthRequired: true,
  },
];

const LayoutSidebar = (props) => {
  const { currentUser } = props;

  const location = useLocation();

  const isUserLoggedIn = useMemo(() => !!currentUser, [currentUser]);

  return (
    <aside className={cx('layoutSidebar')}>
      <section className={cx('layoutSidebarBrand')}>
        <Link to="/" className={cx('layoutSidebarBrand_name')}>
          BOOKSTORE
        </Link>
      </section>

      <ul className={cx('layoutSidebarLinksList')}>
        {links
          .filter(
            (link) => link.isAuthRequired === undefined || link.isAuthRequired === isUserLoggedIn,
          )
          .map((link) => (
            <li
              key={link.to}
              className={cx('layoutSidebarLinksList_item', {
                layoutSidebarLinksList_item__active: location.pathname === link.to,
                layoutSidebarLinksList_item__danger: link.isDanger,
              })}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

LayoutSidebar.defaultProps = {
  currentUser: null,
};

LayoutSidebar.propTypes = {
  currentUser: propTypes.currentUser,
};

export default LayoutSidebar;
