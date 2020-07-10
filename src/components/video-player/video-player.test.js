import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import films from "../../mocks/testing.js";

const movie = films[0];

describe(`VideoPlayer`, () => {
  it(`Render VideoPlayer`, () => {
    const tree = renderer.create(
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

