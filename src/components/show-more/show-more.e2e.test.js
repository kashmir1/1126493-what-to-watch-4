import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMore from "./show-more.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`CatalogMore`, () => {
  it(`Should showMore clicked`, () => {
    const handleShowMoreClick = jest.fn();

    const main = mount(
        <ShowMore
          onShowMoreClick={handleShowMoreClick}
        />
    );

    const showMoreButton = main.find(`.catalog__button`);
    showMoreButton.simulate(`click`);
    expect(handleShowMoreClick).toHaveBeenCalled();
  });
});
