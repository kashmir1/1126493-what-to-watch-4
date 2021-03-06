import React from "react";
import renderer from "react-test-renderer";
import MovieNavTabs from "./movie-nav-tabs.jsx";

const MovieNavList = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

describe(`MovieNavTabs`, () => {
  it(`Render MovieNavTabs`, () => {
    const tree = renderer.create(
        <MovieNavTabs
          tabs={MovieNavList}
          activeTab={MovieNavList.OVERVIEW}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
