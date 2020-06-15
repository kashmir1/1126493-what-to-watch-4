import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieDescription = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE: 2014
};

const Titles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`];

ReactDOM.render(
    <App
      movieTitle={MovieDescription.MOVIE_TITLE}
      genre={MovieDescription.GENRE}
      release={MovieDescription.RELEASE}
      titles={Titles}
    />,
    document.querySelector(`#root`)
);
