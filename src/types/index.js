import PropTypes from "prop-types";

const {shape, string, number, arrayOf, func} = PropTypes;

export const appType = shape({
  movie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
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

export const moviesListType = shape({
  moviesList: arrayOf(
      shape({
        id: number.isRequired,
        title: string.isRequired,
        image: string.isRequired,
      })
  ),
  onTitleClick: func.isRequired,
  onCardMouseHover: func.isRequired,
});
