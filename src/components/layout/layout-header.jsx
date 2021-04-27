import React, { useMemo, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const links = [
  { to: '/books', label: 'Books' },
  { to: '/users', label: 'Users' },
  { to: '/signup', label: 'Sign up', isAuthRequired: false },
  { to: '/login', label: 'Log in', isAuthRequired: false },
  { to: '/profile', label: 'Profile', isAuthRequired: true },
  {
    to: '/logout', label: 'Log out', isAuthRequired: true, isDanger: true,
  },
];

const LayoutHeader = (props) => {
  const { currentUser } = props;

  const location = useLocation();

  const isUserLoggedIn = useMemo(() => !!currentUser, [currentUser]);

  const currentLinks = useMemo(() => links.filter(
    (link) => link.isAuthRequired === undefined || link.isAuthRequired === isUserLoggedIn,
  ), [isUserLoggedIn]);

  return (
    <header className={cx('layoutHeader')}>
      <section className={cx('layoutHeader_section')}>
        <div className={cx('layoutHeaderBrand')}>
          <Link to="/" className={cx('layoutHeaderBrand_name')}>
            BOOK
            <span className={cx('layoutHeaderBrand_highlight')}>STORE</span>
          </Link>
        </div>
      </section>

      <section className={cx('layoutHeader_section')}>
        <div className={cx('layoutHeaderLinks')}>
          {currentLinks.map((link, linkIndex) => (
            <Fragment key={link.to}>
              <Link
                to={link.to}
                className={cx('layoutHeaderLinks_link', {
                  layoutHeaderLinks_link__active: location.pathname === link.to,
                  layoutHeaderLinks_link__danger: link.isDanger,
                })}
              >
                {link.label}
              </Link>
              {linkIndex !== currentLinks.length - 1 && '|'}
            </Fragment>
          ))}
        </div>
      </section>
    </header>
  );
};

LayoutHeader.defaultProps = {
  currentUser: null,
};

LayoutHeader.propTypes = {
  currentUser: propTypes.currentUser,
};

export default LayoutHeader;
