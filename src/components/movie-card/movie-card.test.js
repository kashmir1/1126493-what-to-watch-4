import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import moviesList from "../../mocks/testing.js";

it(`MovieCard is rendered correctly`, () => {
  const onCardMouseEnter = jest.fn();
  const onTitleClick = jest.fn();
  const tree = renderer.create(
      <MovieCard
        movie={moviesList[0]}
        onCardMouseEnter={onCardMouseEnter}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
