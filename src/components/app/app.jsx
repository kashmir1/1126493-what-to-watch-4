import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleLinkHandler = () => {};

const App = (props) => {

  const {movieDescription, moviesList} = props;
  return (
    <Main
      movieDescription={movieDescription}
      moviesList={moviesList}
      onTitleClick={titleLinkHandler}
    />
  );
};

App.propTypes = {
  movieDescription: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }),
  moviesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
