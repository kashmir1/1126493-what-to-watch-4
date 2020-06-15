import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, genre, release, titles} = props;
  return (
    <Main
      movieTitle={movieTitle}
      genre={genre}
      release={release}
      titles={titles}
    />
  );
};

export default App;
