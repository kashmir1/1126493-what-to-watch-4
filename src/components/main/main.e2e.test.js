import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import moviesList from "../../mocks/testing";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should main title link be pressed`, () => {
  const handleTitleClick = jest.fn();
  const handleCardMouseHover = jest.fn();
  const main = shallow(
      <Main
        movie = {moviesList[0]}
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
