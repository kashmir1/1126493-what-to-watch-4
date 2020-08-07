import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';
import {films} from '../data-for-test.js';
import history from "../../history";

const film = films[0];

describe(`SmallMovieCard`, () => {
  it(`Render SmallMovieCard`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SmallMovieCard
            film={film}
            isPlaying={false}
            onIsPlayingChange={() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
