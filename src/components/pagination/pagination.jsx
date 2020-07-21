import React, { useCallback, useMemo, memo } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './pagination.module.scss';

const cx = classnames.bind(styles);

const Pagination = (props) => {
  const {
    onChangePage,
    offset,
    limit,
    total,
  } = props;

  const pageCount = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const currentPage = useMemo(() => offset / limit, [offset, limit]);

  const handleChangePage = useCallback(({ selected: page }) => {
    if (currentPage === page) return;

    onChangePage(page);
  }, [currentPage, onChangePage]);

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      initialPage={currentPage}
      onPageChange={handleChangePage}
      pageRangeDisplayed={2}
      marginPagesDisplayed={4}
      containerClassName={cx('pagination')}
      nextClassName={cx('paginationNextLabel')}
      nextLinkClassName={cx('paginationNextLabel_link')}
      pageClassName={cx('paginationPage')}
      pageLinkClassName={cx('paginationPage_link')}
      activeLinkClassName={cx('paginationPage_link__active')}
      breakClassName={cx('paginationBreak')}
      breakLinkClassName={cx('paginationBreak_link')}
      previousClassName={cx('paginationPreviousLabel')}
      previousLinkClassName={cx('paginationPreviousLabel_link')}
      disabledClassName={cx('pagination_disabled')}
    />
  );
};

Pagination.defaultProps = {
  offset: 0,
  limit: 12,
  total: 240,
};

Pagination.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  offset: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
};

export default memo(Pagination);
