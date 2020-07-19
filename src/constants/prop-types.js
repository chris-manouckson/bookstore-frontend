import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.element])),
    PropTypes.node,
    PropTypes.element,
  ]),
  // INFO: auth related prop types
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ]),
  // INFO: book related prop types
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.number,
    description: PropTypes.string,
    prisce: PropTypes.shape({
      amount: PropTypes.number,
      // TODO: move currencies to constants
      currency: PropTypes.oneOf(['$']),
    }),
    author: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
    ]),
  }),
  // INFO: author related prop types
  author: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  }),
};

export default propTypes;
