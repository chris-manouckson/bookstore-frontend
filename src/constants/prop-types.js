import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.element])),
    PropTypes.node,
    PropTypes.element,
  ]),
  // INFO: auth related prop types
  currentUser: PropTypes.oneOfType([
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
  // INFO: book related prop types
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    description: PropTypes.string,
    prisce: PropTypes.shape({
      amount: PropTypes.number,
      // TODO: move currencies to constants
      currency: PropTypes.oneOf(['$']),
    }),
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
      }),
    ),
  }),
  // INFO: user related prop types
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  }),
  // INFO: get all API related prop types
  pagination: PropTypes.shape({
    offset: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number,
  }),
  order: PropTypes.shape({
    column_name: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc']),
  }),
  search: PropTypes.shape({
    text: PropTypes.string,
  }),
};

export default propTypes;
