import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, genre, release} = props;
  return (
    <Main
      movieTitle={movieTitle}
      genre={genre}
      release={release}
    />
  );
};

export default App;
