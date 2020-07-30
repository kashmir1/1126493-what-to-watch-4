import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from "./show-more.jsx";

describe(`ShowMore`, () => {
  it(`Render`, () => {
    const tree = renderer.create(
        <ShowMore
          onShowMoreClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
