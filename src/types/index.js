import PropTypes from "prop-types";

const {shape, string, number, arrayOf, func} = PropTypes;

export const appType = shape({
  movieDescription: shape({
    movieTitle: string.isRequired,
    genre: string.isRequired,
    release: number.isRequired,
  }).isRequired,
  moviesList: arrayOf(
      shape({
        title: string.isRequired,
        id: number.isRequired,
        image: string.isRequired
      })
  ).isRequired,
  onTitleClick: func.isRequired,
  onCardMouseHover: func.isRequired
});
