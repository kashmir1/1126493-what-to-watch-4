// npm run test.jest -- -u

import React from 'react';
import TestRenderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import moviesList from "../../mocks/testing.js";

const movie = moviesList[0];

describe(`VideoPlayer`, () => {
  it(`Render VideoPlayer`, () => {
    const tree = TestRenderer.create(
        <VideoPlayer muted
          isPlaying = {false}
          src = {movie.src}
          poster = {movie.poster}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

