import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const links = [
  { to: '/books', label: 'Books' },
  { to: '/authors', label: 'Authors' },
];

const LayoutHeader = (props) => {
  const { currentUser } = props;

  const location = useLocation();

  const userIsLoggedIn = useMemo(() => !!currentUser, [currentUser]);

  return (
    <header className={cx('layoutHeader')}>
      <section className={cx('layoutHeader_section')}>
        <div className={cx('layoutHeaderBrand')}>
          <Link to="/" className={cx('layoutHeaderBrand_name')}>
            BOOKSTORE
          </Link>
        </div>

        <div className={cx('layoutHeaderLinks')}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cx('layoutHeaderLinks_link', {
                layoutHeaderLinks_link__active: location.pathname === link.to,
              })}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className={cx('layoutHeader_section')}>
        {userIsLoggedIn ? (
          <div className={cx('layoutHeaderProfile')}>
            <button className={cx('layoutHeaderProfile_dropdown-toggle')} type="button">
              {currentUser.email}
            </button>
            <div className={cx('layoutHeaderProfileDropdown')}>
              <Link
                to="/profile"
                className={cx('layoutHeaderProfileDropdown_item')}
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className={cx('layoutHeaderProfileDropdown_item', 'layoutHeaderProfileDropdown_item__danger')}
              >
                Log out
              </Link>
            </div>
          </div>
        ) : (
          <div className={cx('layoutHeaderAuth')}>
            <Link
              to="/login"
              className={cx('layoutHeaderAuth_link')}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={cx('layoutHeaderAuth_link')}
            >
              Signup
            </Link>
          </div>
        )}
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
