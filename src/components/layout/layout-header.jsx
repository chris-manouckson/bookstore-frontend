import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

const LayoutHeader = (props) => {
  const { currentUser } = props;

  const userIsLoggedIn = useMemo(() => !!currentUser, [currentUser]);

  return (
    <header className={cx('layoutHeader')}>
      <section className={cx('layoutHeader_section')}>
        <div className={cx('layoutHeaderBrand')}>
          <Link to="/" className={cx('layoutHeaderBrand_name')}>
            Bookstore
          </Link>
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
