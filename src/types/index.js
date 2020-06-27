import PropTypes from "prop-types";

const {shape, string, number, arrayOf, func} = PropTypes;

export const appType = shape({
  movie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    src: string.isRequired,
    background: string.isRequired,
    ratingScore: string.isRequired,
    ratingLevel: string.isRequired,
    ratingCount: number.isRequired,
    movieDescription: string.isRequired,
    movieDirector: string.isRequired,
    movieStarring: string.isRequired,
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
  movie: shape({
    id: number.isRequired,
    title: string.isRequired,
    src: string.isRequired,
  }),
  onTitleClick: func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
  onCardMouseHover: func.isRequired,
});
