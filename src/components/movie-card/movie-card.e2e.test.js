import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`When you hover over a card movie, information about movie enters the handler`, () => {
  const onCardMouseHover = jest.fn();
  const onTitleClick = jest.fn();
  const main = shallow(
      <MovieCard
        key={movie.id}
        title={movie.title}
        image={movie.image}
        onCardMouseHover={onCardMouseHover}
        onTitleClick={onTitleClick}
      />
  );

  const movieCard = main.find(`.small-movie-card`).first();

  expect(movieCard).toHaveLength(1);

  movieCard.props().onMouseEnter();
  expect(onCardMouseHover.mock.calls.length).toBe(1);

  const movieCardTitle = main.find(`.small-movie-card__title`);

  // проверяем что movieCardTitle найдена
  expect(movieCardTitle).toHaveLength(1);

  movieCardTitle.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(0);
});
