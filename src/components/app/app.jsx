import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {

  const {movieDescription, titles} = props;
  return (
    <Main
      movieDescription={movieDescription}
      titles={titles}
    />
  );
};

App.propTypes = {
  movieDescription: PropTypes.shape({
    MOVIE_TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE: PropTypes.number.isRequired,
  }),
  titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
