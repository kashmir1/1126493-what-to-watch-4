import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE: 2014
};

ReactDOM.render(
    <App
      movieTitle={Settings.MOVIE_TITLE}
      genre={Settings.GENRE}
      release={Settings.RELEASE}
    />,
    document.querySelector(`#root`)
);
