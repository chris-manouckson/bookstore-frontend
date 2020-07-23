import React from 'react';
// import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './layout.module.scss';

const cx = classnames.bind(styles);

// const links = [
//   { to: '/login', text: 'Login' },
//   { to: '/signup', text: 'Signup' },
// ];

const LayoutFooter = () => (
  <footer className={cx('layoutFooter')}>
    <section className={cx('layoutFooter_section')}>
      <div className={cx('layoutFooterCopyRight')}>
        &copy; Bookstore
      </div>
    </section>

    <section className={cx('layoutFooter_section')}>
      <div className={cx('layoutFooterLinkList')}>
        {/* {links.map((link) => (
          <Link
            key={link.text}
            to={link.to}
            className={cx('layoutFooterLinkList_item')}
          >
            {link.text}
          </Link>
        ))} */}
      </div>
    </section>
  </footer>
);

export default LayoutFooter;
