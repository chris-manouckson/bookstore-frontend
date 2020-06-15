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
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
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
      PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
      }),
      PropTypes.oneOf([null]),
    ]),
  }),
};

export default propTypes;
