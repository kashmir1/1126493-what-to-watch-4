import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import moviesList from "../../mocks/testing.js";

const onTitleClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          movie = {moviesList[0]}
          moviesList={moviesList}
          onTitleClick = {onTitleClick}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
