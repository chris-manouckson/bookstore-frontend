import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.element])),
    PropTypes.node,
    PropTypes.element,
  ]),
};

export default propTypes;
