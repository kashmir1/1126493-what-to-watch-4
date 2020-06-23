import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = {
  movieDescription: {
    movieTitle: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    release: 2014
  },

  moviesList: [
    {
      id: 1,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      id: 2,
      title: `Bohemian Rhapsody`,
      image: `img/bohemian-rhapsody.jpg`
    },
    {
      id: 3,
      title: `Macbeth`,
      image: `img/macbeth.jpg`
    },
  ],
};

it(`Should main title link be pressed`, () => {
  const {movieDescription, moviesList} = mockData;
  const handleTitleClick = jest.fn();
  const handleCardMouseHover = jest.fn();
  const main = shallow(
      <Main
        movieDescription={movieDescription}
        moviesList={moviesList}
        onCardMouseHover={handleCardMouseHover}
        onTitleClick={handleTitleClick}
      />
  );

  const mainTitleLink = main.find(`.small-movie-card__link`);

  mainTitleLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(handleTitleClick).toHaveBeenCalledTimes(mainTitleLink.length);
});
