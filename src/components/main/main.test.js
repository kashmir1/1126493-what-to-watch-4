import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import moviesList from "../../mocks/testing.js";

const onTitleClick = () => {};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movie = {moviesList[0]}
      moviesList={moviesList}
      onTitleClick = {onTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
