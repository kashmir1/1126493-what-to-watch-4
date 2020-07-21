import React from 'react';
import renderer from 'react-test-renderer';
import MovieNavOverview from './movie-nav-overview.jsx';
import films from "../../mocks/testing";

const movie = films[0];

describe(`MovieNavOverview`, () => {
  it(`Render MovieNavOverview`, () => {
    const tree = renderer.create(
        <MovieNavOverview
          rating={movie.rating}
          votes={movie.votes}
          description={movie.description}
          director={movie.director}
          starring={movie.starring}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
