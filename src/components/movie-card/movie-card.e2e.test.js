import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import films from "../../mocks/testing.js";
import MovieCard from "./movie-card.jsx";

const movie = films[0];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard`, () => {
  const onCardMouseEnter = jest.fn();
  const onTitleClick = jest.fn();
  const onPosterClick = jest.fn();

  const main = shallow(
      <MovieCard
        movie={movie}
        onCardMouseEnter={onCardMouseEnter}
        onTitleClick={onTitleClick}
        onPosterClick={onPosterClick}
      />
  );

  it(`Should MovieCard hovered`, () => {
    const movieCard = main.find(`.small-movie-card`);
    movieCard.simulate(`mouseenter`, movie);
    expect(onCardMouseEnter).toHaveBeenCalledWith(movie);
  });

  it(`Should MoviePoster clicked`, () => {
    const moviePoster = main.find(`.small-movie-card__image`);
    moviePoster.parent().simulate(`click`, movie);
    expect(onPosterClick).toHaveBeenCalledWith(movie);
  });

  const mockEvent = {
    preventDefault() {}
  };

  const movieTitle = main.find(`.small-movie-card__link`);
  movieTitle.simulate(`click`, mockEvent);
  expect(onTitleClick.mock.calls.length).toBe(1);
  expect(onTitleClick.mock.calls[0][0]).toMatchObject(films[0]);
});
