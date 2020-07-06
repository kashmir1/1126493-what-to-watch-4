import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import moviesList from "../../mocks/testing.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When you hover over a card movie, information about movie enters the handler`, () => {
  const onCardMouseEnter = jest.fn();
  const onTitleClick = jest.fn();
  const main = shallow(
      <MovieCard
        movie = {moviesList[0]}
        onCardMouseEnter={onCardMouseEnter}
        onTitleClick={onTitleClick}
      />
  );

  const mockEvent = {
    preventDefault() {}
  };

  const movieTitle = main.find(`.small-movie-card__link`);
  const movieImage = main.find(`.small-movie-card__image`);
  movieTitle.simulate(`click`, mockEvent);
  movieImage.simulate(`mouseenter`);
  movieImage.simulate(`click`);
  expect(onTitleClick.mock.calls.length).toBe(2);
  expect(onTitleClick.mock.calls[0][0]).toMatchObject(moviesList[0]);
  expect(onCardMouseEnter.mock.calls.length).toBe(1);
  expect(onCardMouseEnter).toHaveBeenCalledWith(moviesList[0]);
});
