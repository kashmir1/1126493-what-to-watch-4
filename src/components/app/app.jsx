import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieDescription, titles} = props;
  return (
    <Main
      movieDescription={movieDescription}
      titles={titles}
    />
  );
};

export default App;
