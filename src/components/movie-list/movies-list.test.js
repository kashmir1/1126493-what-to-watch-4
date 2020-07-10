import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import films from "../../mocks/testing.js";

const movies = films;

describe(`MoviesList`, () => {
  it(`Render MoviesList`, () => {
    const tree = renderer.create(
        <MoviesList
          movies = {movies}
          onTitleClick = {() => {}}
          onPosterClick = {() => {}}
          moviesList = {films}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

