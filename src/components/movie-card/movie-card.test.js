import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";

const movie = {
  id: 0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`MovieCard is rendered correctly`, () => {
  const onCardMouseHover = jest.fn();
  const onTitleClick = jest.fn();
  const tree = renderer.create(
      <MovieCard
        key={movie.id}
        title={movie.title}
        image={movie.image}
        onCardMouseHover={onCardMouseHover}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
