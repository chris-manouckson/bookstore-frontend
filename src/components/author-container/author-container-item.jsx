import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';
import avatarDefaultImage from '../../assets/images/avatar-default.svg';

import styles from './author-container.module.scss';

const cx = classnames.bind(styles);

const AuthorContainerItem = (props) => {
  const { author } = props;

  return (
    <div className={cx('authorContainerItem')}>
      <section className={cx('authorContainerItemAvatar')}>
        <img
          src={author.avatar || avatarDefaultImage}
          alt="avatar default"
          className={cx('authorContainerItemAvatar_image')}
        />
      </section>
      <section className={cx('authorContainerItemDetails')}>
        <h3 className={cx('authorContainerItem_fullName')}>
          <Link to={`authors/${author.id}`} className={cx('authorContainerItem_link')}>
            {`${author.firstName} ${author.lastName}`}
          </Link>
        </h3>
      </section>
    </div>
  );
};

AuthorContainerItem.propTypes = {
  author: propTypes.author.isRequired,
};

export default AuthorContainerItem;
