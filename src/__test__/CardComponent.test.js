import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import CharactersComponent from '../component/Characters/index';
import Tag from '../component/Characters/Tag';

describe('Card component', () => {
  it('CharactersComponent render"', () => {
    render(
      <Provider store={store}>
        <CharactersComponent />
      </Provider>,
    );

    expect(screen.getByText('favorite')).toBeInTheDocument();
  });

  it('CharactersComponent snapshot', () => {
    const card = render(
      <Provider store={store}>
        <CharactersComponent />
      </Provider>,
    );

    expect(card).toMatchSnapshot();
  });
});

describe('Tag component', () => {
  it('Tag render"', () => {
    render(<Tag text="text" />);

    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
