import PropTypes from "prop-types";

const {shape} = PropTypes;

export const appType = shape({
  movieDescription: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseHover: PropTypes.func.isRequired
});
