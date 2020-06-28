import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import styles from './author-container.module.scss';

const cx = classnames.bind(styles);

const AuthorContainerItem = (props) => {
  const { author } = props;

  return (
    <div className={cx('authorContainerItem')}>
      <h3 className={cx('authorContainerItem_fullName')}>
        <Link to={`authors/${author.id}`} className={cx('authorContainerItem_link')}>
          {`${author.firstName} ${author.lastName}`}
        </Link>
      </h3>

      <address className={cx('authorContainerItemAddress')}>
        Email:
        {' '}
        <a
          href={`mailto:${author.email}`}
          className={cx('authorContainerItemAddress_email')}
        >
          {author.email}
        </a>
        <br />
        Phone:
        {' '}
        <a
          href={`tel:${author.phone}`}
          className={cx('authorContainerItemAddress_phone')}
        >
          {author.phone}
        </a>
        <br />
      </address>
    </div>
  );
};

AuthorContainerItem.propTypes = {
  author: propTypes.author.isRequired,
};

export default AuthorContainerItem;
