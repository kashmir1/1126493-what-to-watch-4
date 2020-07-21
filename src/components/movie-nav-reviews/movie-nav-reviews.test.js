import React from 'react';
import renderer from 'react-test-renderer';
import MovieNavReviews from './movie-nav-reviews.jsx';
import films from "../../mocks/testing";

const movie = films[0];

describe(`MovieNavReviews`, () => {
  it(`Render MovieNavReviews`, () => {
    const tree = renderer.create(
        <MovieNavReviews
          reviews={movie.reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
