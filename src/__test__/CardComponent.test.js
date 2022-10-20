import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import CharactersComponent from '../component/Characters/index';
import Card from '../component/Characters/Card';

describe('CharactersComponent component', () => {
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

describe('Card component', () => {
  test('it displays a list of people-list', async () => {
    render(
      <Provider store={store}>
        <Card />
      </Provider>,
    );

    const peopleList = await waitFor(() => screen.getByTestId('people-list'));
    expect(peopleList).toBeInTheDocument();
  });
});

jest.mock('axios');

const fakeData = {
  name: 'test name',
  eye_color: 'test color eye',
  skin_color: 'test color skin',
};

axios.get.mockResolvedValue({ data: fakeData });

describe('Card component', () => {
  test('it displays a row for each people', async () => {
    axios.get.mockResolvedValue({ data: fakeData });

    render(
      <Provider store={store}>
        <Card />
      </Provider>,
    );

    const peopleList = await waitFor(() =>
      screen.findAllByTestId('people-list'),
    );
    expect(peopleList).toHaveLength(1);
  });
});
