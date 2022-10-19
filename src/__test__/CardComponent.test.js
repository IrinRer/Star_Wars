import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import CharactersComponent from '../component/Characters/index';

describe('Card component', () => {
  it('CharactersComponent render"', () => {
    render(
      <Provider store={store}>
        <CharactersComponent />
      </Provider>,
    );
  });
});
