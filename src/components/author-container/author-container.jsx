import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { propTypes } from '../../constants';

import AuthorContainerItem from './author-container-item';
import styles from './author-container.module.scss';

const cx = classnames.bind(styles);

const AuthorContainer = (props) => {
  const { authors } = props;

  return (
    <div className={cx('authorContainer')}>
      {authors.length > 0
        ? authors.map((author) => (
          <AuthorContainerItem key={author.id} author={author} />
        ))
        : (
          <div className={cx('authorContainer_notFoundMessage')}>
            No authors available
          </div>
        )}
    </div>
  );
};

AuthorContainer.defaultProps = {
  authors: [],
};

AuthorContainer.propTypes = {
  authors: PropTypes.arrayOf(propTypes.author),
};

export default AuthorContainer;
