import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer.jsx';
import NameSpace from '../../reducer/name-space.js';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe(`Footer`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      currentPage: `/`,
    }
  });

  it(`Render`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Footer />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
