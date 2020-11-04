import PropTypes from 'prop-types';

const jokeShape = PropTypes.shape({
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export default jokeShape;
