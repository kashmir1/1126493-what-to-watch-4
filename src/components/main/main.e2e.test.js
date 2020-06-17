import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const titles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`];
const movieDescription = {
  movieTitle: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  release: 2014
};

it(`Should main title link be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        titles={titles}
        movieDescription={movieDescription}
        onTitleClick={onTitleClick}
      />
  );

  const mainTitleLink = main.find(`.small-movie-card__link`);

  mainTitleLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onTitleClick).toHaveBeenCalledTimes(mainTitleLink.length);
});
